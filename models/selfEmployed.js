var mongoose = require("mongoose");

var selfemployedSchema = new mongoose.Schema({
  image: String,
  title: String,
  content: String,
  metatitle: String,
  metadescription: String,
  _id: String,
});

module.exports = mongoose.model("selfemployed", selfemployedSchema);