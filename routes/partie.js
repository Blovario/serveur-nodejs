const express = require('express');
const router = express.Router();

const gen = require('../Generateur');

/* GET parties listing. */
router.get('/', function (req, res, next) {
  res.send(gen.liste_partie);
});

router.get('/:id', function (req, res, next) {
  res.send(gen.liste_partie[req.params.id]);
});

router.get('/:id/resume', function (req, res, next) {
  res.send(gen.liste_partie[req.params.id].getResume());
});

module.exports = router;
