const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.users
      .find()
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createItem: function(req, res) {

    db.users
      .findOneAndUpdate({ _id: req.params.id }, { $push: {items: {description: req.body.description, quantity: req.body.quantity}}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  removeItem: function(req, res) {
    console.log(req.body, "body")
    db.users
      .findByIdAndUpdate({ _id: req.params.userid}, { "$pull" : {"items": {"_id" : req.params.itemid}}},
        {multi: true, new: true })
  
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  };
