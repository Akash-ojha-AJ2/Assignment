const express = require("express");
const router = express.Router();
const {
  enhanceArticleById,
} = require("../controllers/enhanceController");

router.put(
  "/enhance/:id",
  enhanceArticleById
);

module.exports = router;
