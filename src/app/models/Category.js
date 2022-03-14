const Sequelize = require('sequelize');
const database = require('../database/db');

const Category = database.define('categories', {
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
});

Category.associate = function (models) {
    Category.hasMany(models.Purchase, {
        as: 'purchases'
    })
};

module.exports = Category;