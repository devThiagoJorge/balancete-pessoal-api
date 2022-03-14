const Sequelize = require('sequelize');
const database = require('../database/db');

const Purchase = database.define('purchases', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE
    },
    description: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATEONLY
    }
});

Purchase.associate = function (models) {
    Purchase.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'categories'
    })
}

module.exports = Purchase;