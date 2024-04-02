import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Fotos';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { noticia_id, tipo, legenda } = req.body;
        const foto = await Foto.create({
          originalname,
          filename,
          noticia_id,
          tipo,
          legenda,
        });

        return res.json(foto);
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
      const foto = await Foto.findByPk(req.body.id);
      return res.json(foto);
    } catch (e) {
      return res.json(req.body);
    }
  }
}

export default new FotoController();
