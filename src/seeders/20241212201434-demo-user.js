'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'hashedpassword',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Staff User',
        email: 'staff@example.com',
        password: 'hashedpassword',
        role: 'staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
