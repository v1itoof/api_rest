import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const userId = parseInt(req.params.id);

      const user = await User.findByPk(userId);

      const { id, email, nome } = user;
      return res.json({ id, email, nome });
    } catch (e) {
      return res.json(req.params);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado!'],
        });
      }

      const novoDados = await user.update(req.body);
      const { id, nome, email } = novoDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      await user.destroy();
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json(null);
    }
  }
}

export default new UserController();
