import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Foto from '../models/Fotos';
import Noticia from '../models/Noticia';

const models = [Noticia, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
