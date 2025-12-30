const Article = require("../models/Article");
const cloudinary = require("../config/cloudinary");

exports.createArticle = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  const article = await Article.create({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    image: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  res.json(article);
};

exports.getArticles = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
};

exports.getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};

exports.updateArticle = async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(article);
};

exports.deleteArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);
  await cloudinary.uploader.destroy(article.image.public_id);
  await article.deleteOne();
  res.json({ message: "Deleted" });
};
