const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: 'luiz@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Mario',
          email: 'mario@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
