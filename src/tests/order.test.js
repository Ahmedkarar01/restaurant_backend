const request = require('supertest');
const app = require('../app'); // Import the app instance
const { sequelize, Order, Menu } = require('../models'); // Import models and DB connection

describe('Order API', () => {
  let menuItem;

  beforeAll(async () => {
    // Sync the database and create a menu item for testing
    await sequelize.sync({ force: true });
    menuItem = await Menu.create({
      name: 'Test Pizza',
      description: 'Delicious test pizza',
      price: 10.99,
      category: 'Pizza',
    });
  });

  afterAll(async () => {
    // Cleanup the database
    await sequelize.close();
  });

  it('should create an order successfully', async () => {
    const res = await request(app)
      .post('/api/orders')
      .send({
        items: [
          { menuId: menuItem.id, quantity: 2 },
        ],
      })
      .set('Authorization', `Bearer YOUR_TEST_TOKEN_HERE`); // Replace with a valid JWT token

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.order).toHaveProperty('id');
    expect(res.body.orderItems).toHaveLength(1);
  });

  it('should return 400 if no items are provided', async () => {
    const res = await request(app)
      .post('/api/orders')
      .send({ items: [] })
      .set('Authorization', `Bearer YOUR_TEST_TOKEN_HERE`);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe('No items provided for the order');
  });
});
