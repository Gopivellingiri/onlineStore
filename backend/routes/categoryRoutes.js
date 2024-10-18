import express from "express";
const router = express.Router();
import {
  authenticate,
  authorziedAdmin,
} from "../middlewares/authMiddleware.js";
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";

// List all categories - this route must come before dynamic ones
router.route("/categories").get(listCategory);

// Create a new category
router.route("/").post(authenticate, authorziedAdmin, createCategory);

// Update an existing category
router.route("/:id").put(authenticate, authorziedAdmin, updateCategory);

// Delete a category
router.route("/:id").delete(authenticate, authorziedAdmin, removeCategory);

// Read a specific category by ID
router.route("/:id").get(readCategory);

export default router;
