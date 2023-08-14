import { RequestHandler } from "express";
import { PostService } from "./post.services";

const getPosts: RequestHandler = async (req, res) => {
  try {
    const options = req.query;
    const { posts, total } = await PostService.getPosts(options);

    res.status(200).json({
      success: true,
      message: "Post retrived successfully",
      total,
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const createPost: RequestHandler = async (req, res) => {
  try {
    const post = req.body;
    console.log(post);
    const result = await PostService.createPost(post);

    res.status(200).json({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const PostController = {
  createPost,
  getPosts,
};
