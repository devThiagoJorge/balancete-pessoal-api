module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('paymentTypes',
    [{
        name: 'Crédito',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Débito',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('paymentTypes', null, {}),
};