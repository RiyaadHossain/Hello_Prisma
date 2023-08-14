import express from "express";
import { PostController } from "./post.controller";
const route = express.Router();

route.get("/", PostController.getPosts);
route.post("/create-post", PostController.createPost);

export const PostRoutes = route;
