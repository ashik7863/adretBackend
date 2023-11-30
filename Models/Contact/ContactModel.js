const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  category: String,
  message: String,
});
const ContactModel=mongoose.model('contact-us',ContactSchema);


module.exports = {
  ContactModel
}