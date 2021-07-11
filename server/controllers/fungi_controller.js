'use strict';

const Fungi = require('../models/fungi_schema');

const createFungi = (req, res) => {
  Fungi.create(req.body)
    .then((data) => {
      console.log('New Fungi Created!', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const readFungiList = (req, res) => {
  Fungi.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const readFungi = (req, res) => {
  Fungi.findById(req.params.id)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
};

const updateFungi = (req, res) => {
  Fungi.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log('Fungi updated!');
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteFungi = (req, res) => {
  Fungi.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error('Fungi not available');
      }
      return data.remove();
    })
    .then((data) => {
      console.log('Fungi removed!');
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createFungi,
  readFungi,
  readFungiList,
  updateFungi,
  deleteFungi,
};
