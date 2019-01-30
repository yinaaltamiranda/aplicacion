const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
  id: String,
  nombre: String,
  identificacion: String,
  carrera: String,
  temainv: String,
  semestre: String
});

module.exports = mongoose.model("Estudiante", EstudianteSchema);
