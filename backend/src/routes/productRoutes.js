import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

router.post('/create', productController.createProduct.bind(productController));
router.get('/', productController.getAllProducts.bind(productController));
router.get('/:id', productController.getProductById.bind(productController));
router.put('/:id', productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));

export default router;