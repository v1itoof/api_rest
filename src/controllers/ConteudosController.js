import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Conteudos from '../models/Conteudos';

const upload = multer(multerConfig).single('foto');

class ConteudosController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        if (req.body.tipo === '1' && req.file) { // Verifica se o tipo é 1 e se há um arquivo enviado
          // Manipula a foto
          return res.json({ message: 'Foto recebida' });
        }
        if (req.body.tipo === '2' && req.body.texto) { // Verifica se o tipo é 2 e se há um texto enviado
          // Manipula o texto
          return res.json({ message: `Texto recebido: ${req.body.texto}` });
        }
        return res.status(400).json({
          errors: ['Requisição inválida'],
        });
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe!'],
        });
      }
    });
  }

  // Show
  async show(req, res) {
    try {
      const foto = await Conteudos.findByPk(req.body.id);
      return res.json(foto);
    } catch (e) {
      return res.json(req.body);
    }
  }
}

export default new ConteudosController();
