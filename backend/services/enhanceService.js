const model = require("../config/gemini");

exports.enhanceContent = async (
  originalArticle,
  ref1,
  ref2
) => {
  const prompt = `
You are a professional content rewriter and SEO expert.

STRICT RULES (VERY IMPORTANT):
1. You MUST NOT reuse sentences from the original article.
2. You MUST rewrite everything in NEW wording.
3. You MUST merge insights, examples, and ideas from BOTH reference articles.
4. The final article must be at least 40–60% different from the original.
5. If content is similar, rewrite again until it is clearly different.
6. Original article is ONLY a topic reference, NOT a copy source.

TASK:
- Create a NEW enhanced article
- Use original article only to understand topic & structure
- Use reference articles to ADD new ideas, explanations, and depth
- Improve SEO, clarity, and readability

OUTPUT FORMAT:
Return ONLY valid JSON.
No markdown.
No backticks.

JSON FORMAT:
{
  "intro": {
    "heading": "New engaging heading",
    "content": [
      "Completely rewritten paragraph 1",
      "Completely rewritten paragraph 2"
    ]
  },
  "sections": [
    {
      "heading": "Rewritten section heading",
      "content": [
        "New rewritten content",
        "Content inspired by reference articles"
      ],
      "subSections": []
    }
  ]
}

ORIGINAL ARTICLE (USE ONLY FOR CONTEXT):
${originalArticle}

REFERENCE ARTICLE 1 (MUST USE IDEAS FROM THIS):
${ref1}

REFERENCE ARTICLE 2 (MUST USE IDEAS FROM THIS):
${ref2}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
};
