import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import conteudosController from '../controllers/ConteudosController';

const router = new Router();

router.get('/', loginRequired, conteudosController.show);
router.post('/', loginRequired, conteudosController.store);

export default router;
