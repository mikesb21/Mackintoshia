const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/fungi_controller');

const router = express.Router();

router
  .post('/fungi', createData)
  .get('/fungi', readData)
  .put('/fungi/:id', updateData)
  .delete('/fungi/:id', deleteData);

module.exports = router;
