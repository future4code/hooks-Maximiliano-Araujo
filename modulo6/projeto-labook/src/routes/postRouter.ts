import  express  from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router()
const postController = new PostController

postRouter.post("/create", postController.post)
postRouter.get("/:id", postController.get)