import express from "express";
import userRouter from "./routers/user.route.js";
import { connectToDatabase } from "./database/database.js";

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);
//comment

connectToDatabase().then(function () {
  app.listen(3000);
});
