const User = require("./ConsultaSchema");
exports.getConsultas = (req, res) => {
  User.find((err,consulta ) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(consulta);
  });
};

exports.getConsulta = (req, res) => {
  let id = req.params.id;

  User.find({ _id: id }, (err, Consultas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(consulta);
  });
};

exports.newConsulta = (req, res) => {
  const newConsulta = new User(req.body);
  newConsulta.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newConsulta);
  });
};

exports.updateConsulta = (req, res) => {
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

exports.deleteConsulta = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
