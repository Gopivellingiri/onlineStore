import React from "react";
import { useState } from "react";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} from "../../redux/api/categoryApiSlice";
import { toast } from "react-toastify";

const CategoryList = () => {
  const { data: categories } = useFetchCategoriesQuery();
  console.log(categories);
  return <div>CategoryList</div>;
};

export default CategoryList;
