
const db = require('./db');
const User = require('./models/User');
const Cart = require('./models/Cart');
const Business = require('./models/Business');
const Order = require('./models/Order');
const Products = require('./models/Products')
const Session = require('./models/Session')


//Business association
Business.belongsTo(User);
User.hasMany(Business);
Products.belongsTo(Business);

// cart items
Cart.belongsTo(User);
User.hasMany(Cart);
Cart.belongsTo(Products);
Products.hasMany(Cart);

// Order assignment
Order.belongsTo(Business);
Business.hasMany(Order);

//Sessions
Session.belongsTo(User);
User.hasMany(Session);

module.exports = {
  db, User, Business, Order, Products, Cart, Session
}
