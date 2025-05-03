import { NextFunction, Request, Response } from "express";

export interface PostControllerStructure {
  getPosts: (req: PostsRequest, res: Response) => void;
  addPost: (req: PostsRequest, res: Response, next: NextFunction) => void;
  deletePost: (
    req: PostsRequest,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getPost: (
    req: PostsRequest,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

export type PostParams = {
  postId: string;
};

export interface PostsQuery {
  pageNumber: string;
}

export type PostsRequest = Request<PostParams, object, object, PostsQuery>;
