const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  date: String,
  first_name: String,
  last_name: String,
  regd: String,
  branch: String,
  section: String,
  email: String,
  contact: String,
  feedback:String,
  primary_domain:String,
  secondary_domain:String,
});

const FormSchema = mongoose.model('forms', formDataSchema);

module.exports = FormSchema;
