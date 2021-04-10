const Sequelize = require('sequelize') //for things like Sequelize.STRING
const db = require('../db')

const Cart = db.define('cart', {
    productID: {
        type: Sequelize.STRING,
    },
    userID:{
        type: Sequelize.STRING,
    }
})


module.exports = Cart
