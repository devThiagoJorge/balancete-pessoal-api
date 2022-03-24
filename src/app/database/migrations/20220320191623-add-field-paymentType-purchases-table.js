'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('purchases', 'payment_type_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'paymentTypes',
        key: 'id',
        as: 'payment_type_id'
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('purchases', 'payment_type_id')
  }
};