'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Menus', [
      {
        name: 'Burger',
        description: 'Beef burger with cheese',
        price: 10.5,
        category: 'Main',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza',
        description: 'Margherita pizza',
        price: 12,
        category: 'Main',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salad',
        description: 'Caesar Salad',
        price: 7.5,
        category: 'Starter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fries',
        description: 'Crispy fries',
        price: 4,
        category: 'Side',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ice Cream',
        description: 'Vanilla ice cream',
        price: 5,
        category: 'Dessert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
