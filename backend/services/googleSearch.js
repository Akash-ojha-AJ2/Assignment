const { getJson } = require("serpapi");

exports.searchGoogle = async (title) => {
  try {
    const result = await getJson({
      engine: "google",
      q: title,
      api_key: process.env.SERP_API_KEY,
      num: 10,
    });

    if (!result.organic_results) return [];

    const references = [];

    for (let i = 0; i < result.organic_results.length; i++) {
      const item = result.organic_results[i];

      const link =
        typeof item.link === "string"
          ? item.link
          : typeof item.link === "function"
          ? item.link()
          : null;

      if (!link) continue;

      if (link.includes("beyondchats.com")) {
        continue;
      }

      if (
        link.includes("blog") ||
        link.includes("article") ||
        link.includes("post")
      ) {
        references.push({
          title: item.title || "No title",
          link: link,
          source: link.split("/")[2],
          position: references.length + 1,
        });
      }

      // 🎯 ONLY TOP 2 VALID REFERENCES
      if (references.length === 2) break;
    }

    return references;
  } catch (error) {
    console.error("Google Search Error:", error.message);
    return [];
  }
};

