const Sequelize = require('sequelize') //for things like Sequelize.STRING
const db = require('../db')

const Order = db.define('order', {
    ProductID: {
        type: Sequelize.STRING,
    },
    userID:{
        type: Sequelize.STRING,
    },
    OrderNR: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    Notes: {
        type: Sequelize.STRING,
    },
})


module.exports = Order
