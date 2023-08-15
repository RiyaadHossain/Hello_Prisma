import express from "express";
import { PostController } from "./post.controller";
const route = express.Router();

route.get("/", PostController.getPosts);
route.post("/", PostController.createPost);
route.patch("/:id", PostController.updatePost);
route.delete("/:id", PostController.deletePost);
route.get("/learn-query", PostController.learnAggregationNgrouping);
route.get("/:id", PostController.getPost);

export const PostRoutes = route;
