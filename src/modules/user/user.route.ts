import express, { Request, Response } from "express";
import { UserController } from "./user.controller";
const route = express.Router();

route.get("/", UserController.getUsers);
route.get("/:id", UserController.getUser);
route.post("/", UserController.createUser);
route.post("/profile", UserController.profile);

export const UserRoutes = route;
