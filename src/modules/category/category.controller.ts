import { RequestHandler } from "express";
import { CategoryService } from "./category.services";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const category = req.body;
    const result = await CategoryService.createCategory(category);

    res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const CategoryController = {
  createCategory,
};
