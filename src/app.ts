import express, { Application } from "express";
import cors from "cors";
import UserRoutes from "./modules/user/user.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);

// Health Check
app.use("/", (req, res) => {
    res.send("Hello Prsima 😎")
})

export default app;
