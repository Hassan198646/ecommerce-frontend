import express from "express";
import productController from "../controllers/productController.js";
import uploads from "../CloudinaryConfig.js";


const router = express.Router();
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products',uploads.single("image"), productController.createProduct);
router.put('/products/:id',uploads.single("image"),productController.updateProduct);
router.delete('/products/:id',productController.deleteProduct);



export default router;