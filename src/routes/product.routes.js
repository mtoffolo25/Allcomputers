import { Router } from 'express';
import { getProductController, authMiddleWareController, getProductByCat } from '../controllers/product.controller.js';

const router = Router();

//GET
router.get('/', authMiddleWareController, getProductController );
router.get('/cat', getProductByCat)

export default router;