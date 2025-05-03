import { Router } from "express";
import PostController from "../controller/PostController.js";
import Post from "../model/Post.js";

const postsRouter = Router();

const postController = new PostController(Post);

postsRouter.get("/", postController.getPosts);

postsRouter.post("/", postController.addPost);

postsRouter.delete("/:postId", postController.deletePost);

postsRouter.get("/:postId", postController.getPost);

export default postsRouter;
