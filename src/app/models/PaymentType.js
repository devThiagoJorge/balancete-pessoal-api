const Sequelize = require('sequelize');
const database = require('../database/db');

const PaymentType = database.define('paymentTypes', {
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

PaymentType.associate = function (models) {
    PaymentType.hasMany(models.Purchase, {
        foreignKey: 'payment_type_id',
        as: 'purchases'
    })
};

module.exports = PaymentType;