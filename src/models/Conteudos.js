import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      ordem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      texto: {
        type: Sequelize.STRING,
        allowNull: true,
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
        validate: {
          notEmpty: {
            msg: 'Campo tipo não pode ficar vazio.',
          },
        },
      },
      imagem_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: 'conteudos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Noticia, { foreignKey: 'noticia_id' });
  }
}
