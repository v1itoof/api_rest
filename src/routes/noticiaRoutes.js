import { Router } from 'express';
import noticiaController from '../controllers/NoticiaController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', noticiaController.index);
router.get('/:id', noticiaController.show);

router.post('/', loginRequired, noticiaController.store);
router.put('/', loginRequired, noticiaController.update);
router.delete('/', loginRequired, noticiaController.delete);

export default router;
