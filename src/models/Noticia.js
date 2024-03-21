import Sequelize, { Model } from 'sequelize';

export default class Noticia extends Model {
  static init(sequelize) {
    super.init({
      titulo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Titulo não pode ser vazio',
          },
        },
      },
      subtitulo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Subtitulo não pode ser vazio',
          },
        },
      },
      data_publicacao: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      user_id: {
        type: Sequelize.INTEGER, // Assumindo que o id do usuário seja do tipo INTEGER
        allowNull: false,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}
