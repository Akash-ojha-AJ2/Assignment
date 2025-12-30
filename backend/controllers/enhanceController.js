const Article = require("../models/Article");
const EnhancedArticle = require("../models/EnhancedArticle");
const { cleanGeminiJson } = require("../utils/cleanGeminiJson");

const { searchGoogle } = require("../services/googleSearch");
const { scrapeArticle } = require("../services/scraper");
const { enhanceContent } = require("../services/enhanceService");

exports.enhanceArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article)
      return res.status(404).json({ message: "Article not found" });
    await EnhancedArticle.deleteMany({title: article.title});
    const references = await searchGoogle(article.title);

    const ref1 = await scrapeArticle(references[0]?.link);
    const ref2 = await scrapeArticle(references[1]?.link);

    const enhancedText = await enhanceContent(
      JSON.stringify(article),
      ref1,
      ref2
    );

    const cleanedJson = cleanGeminiJson(enhancedText);

    let parsed;
    try {
      parsed = JSON.parse(cleanedJson);
    } catch (error) {
      console.error("❌ Gemini RAW RESPONSE:\n", enhancedText);
      throw new Error("Gemini returned invalid JSON");
    }

    const enhancedArticle = await EnhancedArticle.create({
      title: article.title,
      description: article.description,
      author: article.author,
      date: article.date,
      tags: article.tags,
      coverImage: article.coverImage,

      sources: references.map((ref) => ({
        title: ref.title,
        url: ref.link,
        source: ref.source,
      })),

      intro: parsed.intro,
      sections: parsed.sections,
    });

    res.json({
      success: true,
      message: "Enhanced article saved separately",
      enhancedArticleId: enhancedArticle._id,
    });
  } catch (err) {
    console.error("Enhance Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
