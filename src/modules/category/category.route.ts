import express from "express";
import { CategoryController } from "./category.controller";
const route = express.Router();

route.post("/create-category", CategoryController.createCategory);

export const CategoryRoutes = route;
