import express from 'express';
import ProductController from '../controllers/productController.js';
import verifyToken from '../utils/jwt.js';

const router = express.Router();
const productController = new ProductController();

console.log(typeof verifyToken)

// Middleware to protect admin routes
router.use(verifyToken);

// Route to add a new product
router.post('/products', productController.createProduct.bind(productController));

// Route to update an existing product
router.put('/products/:id', productController.updateProduct.bind(productController));

// Route to delete a product
router.delete('/products/:id', productController.deleteProduct.bind(productController));

// Route to get all products for admin
router.get('/products', productController.getAllProducts.bind(productController));

export default router;