const mongoose = require("mongoose");

var categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const categoriesDB = mongoose.model("categories", categoriesSchema);
module.exports = categoriesDB;
