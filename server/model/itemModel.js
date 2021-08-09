const mongoose = require("mongoose");

var itemsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const itemsDB = mongoose.model("items", itemsSchema);
module.exports = itemsDB;
