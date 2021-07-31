const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
  name: String,
  protein: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Protein",
  },
  topping: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topping",
  },
  cheese: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cheese",
  },
  condiment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Condiment",
  },
  rating: "Number",
  price: "Number",
});

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;
