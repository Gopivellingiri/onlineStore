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
  fetchTopProducts,
  fetchNewProducts,
} from "../controllers/productController.js";
import checkId from "../middlewares/checkId.js";

router
  .route("/")
  .get(fetchProduct)
  .post(authenticate, authorziedAdmin, formidable(), addProduct);

router.route("/allproducts").get(fetchAllProduct);
router
  .route("/:id/reviews")
  .post(authenticate, authorziedAdmin, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorziedAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorziedAdmin, deleteProduct);
export default router;
