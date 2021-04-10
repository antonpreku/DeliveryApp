const Sequelize = require('sequelize') //for things like Sequelize.STRING
const db = require('../db')

const User = db.define('user', {
    userName: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
})


module.exports = User
