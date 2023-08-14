import { RequestHandler } from "express";
import { UserService } from "./user.services";

const getUsers: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.getUsers();

    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUser: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await UserService.getUser(id);

    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const createUser: RequestHandler = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.createUser(user);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const profile: RequestHandler = async (req, res) => {
  try {
    const profile = req.body;
    const result = await UserService.profile(profile);

    res.status(200).json({
      success: true,
      message: "User profile created/updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const UserController = {
  createUser,
  profile,
  getUsers,
  getUser,
};
