/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('noticias', 'views_count', {
      type: Sequelize.INTEGER,
      allowNull: true, // Altera para permitir valores nulos
      defaultValue: 0, // Se desejar um valor padrão, adicione aqui
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('noticias', 'views_count', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Se você tinha um valor padrão, adicione aqui
    });
  },
};
