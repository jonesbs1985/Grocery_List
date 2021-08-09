const mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const listDB = mongoose.model("list", listSchema);
module.exports = listDB;
