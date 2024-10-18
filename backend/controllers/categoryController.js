import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import mongoose from "mongoose";
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json({ error: "Name is required" });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.json({ error: "Already exists" });
    }

    const category = await new Category({ name }).save();
    res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const { id } = req.params; // Use id

  const category = await Category.findById(id);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  category.name = name;
  const updatedCategory = await category.save();
  res.json(updatedCategory);
});

const removeCategory = asyncHandler(async (req, res) => {
  const { id } = req.params; // Use id
  const removed = await Category.findByIdAndRemove(id);
  if (!removed) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json(removed);
});

const listCategory = asyncHandler(async (req, res) => {
  try {
    const all = await Category.find({});
    res.json(all);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
});

const readCategory = asyncHandler(async (req, res) => {
  const { id } = req.params; // Use id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  const category = await Category.findById(id);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(category);
});

export {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
};
