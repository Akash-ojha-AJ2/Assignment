const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema({
  title: String,
  content: [String],
  list: [String],
});

const sectionSchema = new mongoose.Schema({
  heading: String,
  content: [String],
  subSections: [subSectionSchema],
});

const introSchema = new mongoose.Schema({
  heading: String,
  content: [String],
});

const articleSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    date: String,
    tags: [String],
    coverImage: String,
    intro: introSchema,
    sections: [sectionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
