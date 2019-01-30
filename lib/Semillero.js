const User = require("./SemilleroSchema");
exports.getSemilleros = (req, res) => {
  User.find((err, semillero) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(semillero);
  });
};

exports.getSemillero = (req, res) => {
  let id = req.params.id;

  User.find({ _id: id }, (err, semillero) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(semillero);
  });
};

exports.newSemillero = (req, res) => {
  const newSemillero = new User(req.body);
  newSemillero.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newSemillero);
  });
};

exports.updateSemillero = (req, res) => {
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

exports.deleteSemillero = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
