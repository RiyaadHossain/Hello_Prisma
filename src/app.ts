import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { CategoryRoutes } from "./modules/category/category.route";
import { PostRoutes } from "./modules/post/post.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/post", PostRoutes);

// Health Check
app.use("/", (req, res) => {
  res.send("Hello Prsima 😎");
});

export default app;
