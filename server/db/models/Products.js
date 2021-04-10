const Sequelize = require('sequelize') //for things like Sequelize.STRING
const db = require('../db')

const Products = db.define('products', {
    businessID: {
        type: Sequelize.STRING,
    },
    productName:{
        type: Sequelize.STRING,
    },category:{
        type: Sequelize.STRING,
    },price:{
        type: Sequelize.STRING,
    },image:{
        type: Sequelize.STRING,
    },desciption:{
        type: Sequelize.STRING,
    },
})


module.exports = Products
