'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn('purchases', 'name')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('purchases', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    });

  }
};