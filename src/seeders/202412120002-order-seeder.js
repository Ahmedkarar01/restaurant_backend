'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT id FROM Users', { type: Sequelize.QueryTypes.SELECT });

    const orders = [
      {
        userId: users[0].id, // Assuming users exist with IDs
        status: 'complete',
        createdAt: new Date('2024-11-01T10:00:00'),
        updatedAt: new Date('2024-11-01T12:00:00'),
      },
      {
        userId: users[1].id,
        status: 'complete',
        createdAt: new Date('2024-11-05T14:00:00'),
        updatedAt: new Date('2024-11-05T16:00:00'),
      },
      {
        userId: users[2].id,
        status: 'complete',
        createdAt: new Date('2024-11-10T11:30:00'),
        updatedAt: new Date('2024-11-10T12:00:00'),
      },
      {
        userId: users[0].id,
        status: 'complete',
        createdAt: new Date('2024-11-12T18:00:00'),
        updatedAt: new Date('2024-11-12T20:00:00'),
      },
    ];

    await queryInterface.bulkInsert('Orders', orders);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
