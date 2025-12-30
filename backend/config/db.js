const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL,{
    dbName:"article"
  });
  console.log("MongoDB Connected");
};

module.exports = connectDB;
