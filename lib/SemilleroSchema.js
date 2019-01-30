const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SemilleroSchema = new Schema({
  id: String,
  nombre: String,
  carrera: String,
  numeroi: String,
  numerop: String,
  eventos: String
});

module.exports = mongoose.model("Semillero", SemilleroSchema);
