import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.get('/', loginRequired, fotoController.show);
router.post('/', loginRequired, fotoController.store);

export default router;
