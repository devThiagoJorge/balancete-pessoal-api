'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('purchases', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    queryInterface.addColumn('purchases', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('purchases', 'created_at')
    queryInterface.removeColumn('purchases', 'updated_at')
  }
};