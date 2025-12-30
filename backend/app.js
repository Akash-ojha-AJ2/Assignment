require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const seedArticles = require("./seed/seedArticles");
const enhanceRoutes = require("./routes/enhanceRoutes");
const article = require("./routes/articleRoutes");
const enhancedArticleRoutes = require(
  "./routes/enhancedArticleRoutes"
);



const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));


const startServer = async () => {
  await connectDB();   
  // await seedArticles();
};


startServer();

app.use("/api/articles", article);
app.use("/api", enhanceRoutes);
app.use("/api/enhanced-articles", enhancedArticleRoutes);

module.exports = app;
