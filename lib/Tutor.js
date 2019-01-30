const User = require("./TutorSchema");
exports.getTutores = (req, res) => {
  User.find((err, tutor) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(tutor);
  });
};

exports.getTutor = (req, res) => {
  let id = req.params.id;

  User.find({ _id: id }, (err, tutor) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(tutor);
  });
};

exports.newTutor = (req, res) => {
  const newTutor = new User(req.body);
  newTutor.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTutor);
  });
};

exports.updateTutor = (req, res) => {
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

exports.deleteTutor = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
