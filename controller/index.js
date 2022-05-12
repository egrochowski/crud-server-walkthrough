const model = require('./../model');

module.exports.getAll = (req, res) => {
  model
    .findAll()
    .then((words) => {
      res.json(words[0]);
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

module.exports.addWord = (req, res) => {
  model
    .addWord(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports.udpateWord = (req, res) => {
  model
    .updateWord(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports.deleteWord = (req, res) => {
  model
    .deleteWord(req.params)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
