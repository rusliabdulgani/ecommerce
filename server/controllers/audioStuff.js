const Model = require('../models/index');
  
let selectAllAudioStuff = (req, res) => {
  Model.audioStuffModel.find({}, (err, docs) => {
    if(!err){
      res.send(docs)
    }else{
      res.status(500).send(err)
    }
  })
}

let selectAudioStuffById = (req, res) => {
  Model.audioStuffModel.findById(req.params.id, (err, post) => {
    if(!err){
      res.send(post)
    }else{
      res.status(500).send(err)
    }
  })
}


let insertAudioStuff = (req, res) => {
  Model.audioStuffModel.create({
    name: req.body.name,
    productOf: req.body.productOf,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    category: req.body.category
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let deleteAudioStuff = (req, res) => {
  Model.audioStuffModel.remove({
    _id: req.params.id
  }, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

let updateAudioStuff = (req, res) => {
  Model.audioStuffModel.findOneAndUpdate({
    _id: req.params.id
  }, { $set: {
    name: req.body.name,
    productOf: req.body.productOf,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    category: req.body.category
  }}, (err, data) => {
    if(!err){
      res.send(data)
    }else{
      res.status(500).send(err)
    }
  })
}

module.exports = {
  selectAllAudioStuff,
  selectAudioStuffById,
  insertAudioStuff,
  deleteAudioStuff,
  updateAudioStuff
}
