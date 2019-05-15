const Model = require('../models/transaction')

class Product {
  static findAll(req, res) {
    Model.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newTransaction = new Model({
      userId: req.userId,
      cart: req.body.cart,
      totalPrice: req.body.totalPrice,
      status: false
    })
    Model.create(newTransaction)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    Model.findById(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete(req, res) {
    Model.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Model.findOneAndUpdate({ _id: req.params.id }, { $set: { status: true } }, { useFindAndModify: false, new: true })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = Product