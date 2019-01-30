const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  id: String,
  nombre: String,
  identificacion: String,
  estudios: String,
  area: String,
  integrantes: String
});

module.exports = mongoose.model("Tutor", TutorSchema);
