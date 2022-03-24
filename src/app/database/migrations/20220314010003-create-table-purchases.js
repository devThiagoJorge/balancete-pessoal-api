'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('purchases', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        price: {
          type: Sequelize.DOUBLE,
          allowNull: false
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'id',
            as: 'category_id'
          },
        },
      }),
    ]);
  },
  down: queryInterface => queryInterface.dropTable('purchases'),
};