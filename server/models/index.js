const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce');

var schema = mongoose.Schema;
var ObjectId = schema.ObjectId;

var audioStuff = new schema({
  name: String,
  productOf: String,
  price: Number,
  category: String,
  image: String,
  stock: Number
},{
  versionKey: false
}) 


var customers = new schema({
  name: String,
  address: String,
  zipcode: String,
  phone: String 
},{
  versionKey: false
})

var transactions = new schema({
  memberid: [{
    type: schema.Types.ObjectId,
    ref: 'customer'
  }],
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: schema.Types.ObjectId,
    ref: 'audioStuff'
  }] 
}, {
  versionKey: false
})

var audioStuffModel = mongoose.model('audiostuff', audioStuff);
var customersModel = mongoose.model('Customer', customers);
var transactionsModel = mongoose.model('transaction', transactions);

module.exports = {
  audioStuffModel,
  customersModel,
  transactionsModel
}
