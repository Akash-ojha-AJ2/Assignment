const EnhancedArticle = require("../models/EnhancedArticle");

exports.getAllEnhancedArticles = async (req, res) => {
  try {
    const articles = await EnhancedArticle.find()
      .sort({ createdAt: -1 });

    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEnhancedArticleById = async (req, res) => {
  try {
    const article = await EnhancedArticle.findById(
      req.params.id
    );

    if (!article)
      return res
        .status(404)
        .json({ message: "Enhanced article not found" });

    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
