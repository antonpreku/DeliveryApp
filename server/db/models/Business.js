const Sequelize = require('sequelize') //for things like Sequelize.STRING
const db = require('../db')

const Business = db.define('business', {
    businessName: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
})


module.exports = Business
