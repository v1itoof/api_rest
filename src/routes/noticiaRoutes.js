import { Router } from 'express';
import noticiaController from '../controllers/NoticiaController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', noticiaController.index);
router.get('/:id', noticiaController.show);
router.post('/', loginRequired, noticiaController.store);

export default router;
