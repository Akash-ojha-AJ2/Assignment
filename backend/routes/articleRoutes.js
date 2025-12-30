const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle
} = require("../controllers/articleController");

router.post("/", upload.single("image"), createArticle);
router.get("/", getArticles);
router.get("/:id", getArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
