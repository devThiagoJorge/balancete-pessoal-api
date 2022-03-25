const Sequelize = require('sequelize');
const database = require('../database/db');

const Purchase = database.define('purchases', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.DOUBLE
    },
    description: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATEONLY
    },
    category_id: {
        type: Sequelize.INTEGER
    },
    payment_type_id: {
        type: Sequelize.INTEGER
    }

});

Purchase.associate = function (models) {
    Purchase.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'categories'
    });

    Purchase.belongsTo(models.PaymentType, {
        foreignKey: 'payment_type_id',
        as: 'paymentTypes'
    });
}

module.exports = Purchase;