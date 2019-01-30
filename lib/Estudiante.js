const User = require("./EstudianteSchema");
exports.getEstudiantes = (req, res) => {
  User.find((err, estudiante) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(estudiante);
  });
};

exports.getEstudiante = (req, res) => {
  let id = req.params.id;

  User.find({ _id: id }, (err, Estudiantes) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(estudiante);
  });
};

exports.newEstudiante = (req, res) => {
  const newEstudiante = new User(req.body);
  newEstudiante.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newEstudiante);
  });
};

exports.updateEstudiante = (req, res) => {
  let nombre = req.body.nombre;
  User.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteEstudiante = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
