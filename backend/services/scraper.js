const axios = require("axios");
const cheerio = require("cheerio");

exports.scrapeArticle = async (url) => {
  try {
    if (!url || typeof url !== "string") {
      console.log("⚠️ Invalid URL passed to scraper:", url);
      return "";
    }

    const response = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    const $ = cheerio.load(response.data);
    let content = "";

    $("article p, main p, div p").each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 50) {
        content += text + "\n";
      }
    });

    return content.substring(0, 3500);
  } catch (error) {
    console.error("Scraping Error:", url);
    return "";
  }
};
