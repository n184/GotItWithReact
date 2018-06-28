const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
  name: { type: String, required: true },
  overAllBudget: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  items: [ {description: {type: String}, quantity: {type: Number} }]
});

const User = mongoose.model("User", userSchema);



module.exports = User;
