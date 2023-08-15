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

const getPost: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.getPost(id);

    res.status(200).json({
      success: true,
      message: "Post retrived successfully",
      result,
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

const updatePost: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = req.body;
    const result = await PostService.updatePost(id, post);

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const deletePost: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.deletePost(id);

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const learnAggregationNgrouping: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.learnAggNgrop();

    res.status(200).json({
      success: true,
      message: "Result!",
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
  getPost,
  updatePost,
  deletePost,
  learnAggregationNgrouping,
};
