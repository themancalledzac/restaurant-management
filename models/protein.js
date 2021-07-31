const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proteinSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Protein = mongoose.model("Protein", proteinSchema);

module.exports = Protein;
