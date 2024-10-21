import express from "express";
import formidable from "express-formidable";
const router = express.Router();

//controllers
import {
  authorziedAdmin,
  authenticate,
} from "../middlewares/authMiddleware.js";
import {
  addProduct,
  updateProductDetails,
  deleteProduct,
  fetchProduct,
  fetchProductById,
  fetchAllProduct,
  addProductReview,
} from "../controllers/productController.js";
import checkId from "../middlewares/checkId.js";

router
  .route("/")
  .get(fetchProduct)
  .post(authenticate, authorziedAdmin, formidable(), addProduct);

router.route("/allproducts").get(fetchAllProduct);
router
  .route("/:id/reviews")
  .post(authenticate, authorziedAdmin, addProductReview);

router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorziedAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorziedAdmin, deleteProduct);
export default router;
