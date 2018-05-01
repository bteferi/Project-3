const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  Journals: String,
  date: { type: Date, default: Date.now }
});

const Jornal = mongoose.model("Jornal", journalSchema);

module.exports = Jornal;
