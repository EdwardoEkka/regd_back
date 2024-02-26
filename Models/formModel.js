const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  date: String,
  name: String,
  gender:String,
  year:String,
  regd: String,
  branch: String,
  section: String,
  email: String,
  contact: String,
  expectations:String,
  enigmaMotivation:String,
  primary_domain:String,
  secondary_domain:String,
});

const FormSchema = mongoose.model('forms', formDataSchema);

module.exports = FormSchema;
