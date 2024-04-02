import Noticia from '../models/Noticia';

class NoticiaController {
  async store(req, res) {
    try {
      req.body.user_id = req.userId;

      req.body.data_publicacao = new Date().toISOString().slice(0, 19).replace('T', ' ');

      const novaNoticia = await Noticia.create(req.body);
      return res.json(novaNoticia);
    } catch (e) {
      let errors = [];
      if (e.errors && Array.isArray(e.errors)) {
        // Se e.errors existir e for um array, mapeie os erros
        errors = e.errors.map((err) => err.message);
      } else {
        // Se e.errors não existir ou não for um array, adicione o erro padrão
        errors.push(e.message || 'Erro desconhecido');
      }
      return res.status(400).json({ errors });
    }
  }

  // Index
  async index(req, res) {
    try {
      const noticias = await Noticia.findAll();
      return res.json(noticias);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const noticiaId = parseInt(req.params.id);

      const noticia = await Noticia.findByPk(noticiaId);
      return res.json(noticia);
    } catch (e) {
      return res.json(req.params);
    }
  }

  // Update
  async update(req, res) {
    try {
      const noticia = await Noticia.findByPk(req.body.id);

      if (!noticia) {
        return res.status(404).json({
          errors: ['Noticia não encontrada!'],
        });
      }

      const novoDados = await noticia.update(req.body);
      return res.json(novoDados);
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
      const noticia = await Noticia.findByPk(req.body.id);

      if (!noticia) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      await noticia.destroy();
      return res.json(noticia);
    } catch (e) {
      console.log(e);
      return res.status(400).json(null);
    }
  }
}

export default new NoticiaController();
