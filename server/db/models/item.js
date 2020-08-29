const Sequelize = require("sequelize") //for things like Sequelize.STRING
const woodworking = require('../db')

const Item = woodworking.define('item', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    woodType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // image: {
    //     type: ???
    // }
})

//define any class or instance methods

//export your model
module.exports = {
    Item
}
