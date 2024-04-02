/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conteudos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      noticia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'noticia',
          key: 'id',
        },
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ordem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      texto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      imagem_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('conteudos');
  },
};
