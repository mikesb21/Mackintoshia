const express = require('express');

const {
  createFungi,
  readFungi,
  readFungiList,
  updateFungi,
  deleteFungi,
} = require('../controllers/fungi_controller');

const router = express.Router();

router
  .post('/fungi', createFungi)
  .get('/fungi', readFungiList)
  .get('/fungi/:id', readFungi)
  .put('/fungi/:id', updateFungi)
  .delete('/fungi/:id', deleteFungi);

module.exports = router;
