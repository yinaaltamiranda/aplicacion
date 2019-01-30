//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb://localhost:27017/semicor",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var semillero = require("./lib/Semillero");

app.get("/semilleros", (req, res) => {
  semillero.getSemilleros(req, res);
});

app.get("/semilleros/:id", (req, res) => {
  semillero.getSemillero(req, res);
});

app.post("/semilleros", (req, res) => {
  semillero.newSemillero(req, res);
});

app.put("/semilleros/:id", (req, res) => {
  semillero.updateSemillero(req, res);
});

app.delete("/semilleros/:id", (req, res) => {
  semillero.deleteSemillero(req, res);
});

var tutor = require("./lib/Tutor");

app.get("/tutores", (req, res) => {
  tutor.getTutores(req, res);
});

app.get("/tutores/:id", (req, res) => {
  tutor.getTutor(req, res);
});

app.post("/tutores", (req, res) => {
  tutor.newTutor(req, res);
});

app.put("/tutores/:id", (req, res) => {
tutor.updateTutor(req, res);
});

app.delete("/tutores/:id", (req, res) => {
  tutor.deleteTutor(req, res);
});

var estudiante = require("./lib/Estudiante");

app.get("/estudiantes", (req, res) => {
  estudiante.getEstudiantes(req, res);
});

app.get("/estudiantes/:id", (req, res) => {
  estudiante.getEstudiante(req, res);
});

app.post("/estudiantes", (req, res) => {
  estudiante.newEstudiante(req, res);
});

app.put("/estudiantes/:id", (req, res) => {
  estudiante.updateEstudiante(req, res);
});

app.delete("/estudiantes/:id", (req, res) => {
  estudiante.deleteEstudiante(req, res);
});

var consulta = require("./lib/Consulta");

app.get("/consultas", (req, res) => {
  consulta.getConsultas(req, res);
});

app.get("/consultas/:id", (req, res) => {
  consulta.getConsulta(req, res);
});

app.post("/consultas", (req, res) => {
  consulta.newConsulta(req, res);
});

app.put("/consultas/:id", (req, res) => {
  consulta.updateConsulta(req, res);
});

app.delete("/consultas/:id", (req, res) => {
  consulta.deleteConsulta(req, res);
});

// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
