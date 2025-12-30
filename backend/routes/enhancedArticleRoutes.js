const express = require("express");
const router = express.Router();

const {
  getAllEnhancedArticles,
  getEnhancedArticleById,
} = require("../controllers/enhancedArticleController");

router.get("/", getAllEnhancedArticles);
router.get("/:id", getEnhancedArticleById);

module.exports = router;
