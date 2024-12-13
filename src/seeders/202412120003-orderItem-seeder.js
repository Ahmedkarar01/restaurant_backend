'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const menus = await queryInterface.sequelize.query('SELECT id FROM Menus', { type: Sequelize.QueryTypes.SELECT });
    const orders = await queryInterface.sequelize.query('SELECT id FROM Orders', { type: Sequelize.QueryTypes.SELECT });

    const orderItems = [
      { orderId: orders[0].id, menuId: menus[0].id, quantity: 2 },
      { orderId: orders[0].id, menuId: menus[3].id, quantity: 1 },
      { orderId: orders[1].id, menuId: menus[1].id, quantity: 1 },
      { orderId: orders[1].id, menuId: menus[4].id, quantity: 2 },
      { orderId: orders[2].id, menuId: menus[2].id, quantity: 1 },
      { orderId: orders[3].id, menuId: menus[0].id, quantity: 3 },
      { orderId: orders[3].id, menuId: menus[3].id, quantity: 2 },
    ];

    await queryInterface.bulkInsert('OrderItems', orderItems);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
