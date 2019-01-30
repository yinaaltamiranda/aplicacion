const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultaSchema = new Schema({
  id: String,
  nombre: String,
  identificacion: String,
  temain: String,
  registroe: String,
  registrod: String
});

module.exports = mongoose.model("Consulta", ConsultaSchema);
