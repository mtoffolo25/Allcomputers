import { Router } from 'express';
import { getProductController, authMiddleWareController, detailProduct } from '../controllers/product.controller.js';

const router = Router();

//GET
router.get('/', authMiddleWareController, getProductController );
router.get('/detail/:pid', detailProduct)

export default router;