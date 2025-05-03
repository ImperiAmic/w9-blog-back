import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { PostStructure } from "../../types.js";
import PostController from "../PostController.js";
import { PostsRequest } from "../types.js";
import ServerError from "../../../server/ServerError/ServerError.js";
import statusCodes from "../../../globals/statusCodes.js";
import { recipe3 } from "../../fixtures.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the getPost method from PostController class", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn();

  describe("When it receives a request with the 'Overnight Oats with Berries' postId", () => {
    const req: Pick<Request, "params"> = { params: { postId: recipe3._id } };

    const postModel: Pick<Model<PostStructure>, "findById"> = {
      findById: jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(recipe3) }),
    };

    test("Then it should call the response's status method with 200 status code", async () => {
      const expectedStatusCode = 200;

      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPost(
        req as PostsRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with 'Overnight Oats with Berries' post", async () => {
      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPost(
        req as PostsRequest,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ post: recipe3 });
    });
  });

  describe("When it receives a request with 'invalid-post-id' postId", () => {
    const req: Pick<Request, "params"> = {
      params: { postId: "invalid-post-id" },
    };

    const postModel: Pick<Model<PostStructure>, "findById"> = {
      findById: jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(null) }),
    };

    test("Then it should next the error and return a 406 status code and a 'Post ID not correct' error", async () => {
      const error = new ServerError(
        statusCodes.NOT_ACCEPTABLE,
        "Post ID not correct",
      );
      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPost(
        req as PostsRequest,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe("When it receives a request with 'not-found-id-but-has--24' postId", () => {
    const req: Pick<Request, "params"> = {
      params: { postId: "not-found-id-but-has--24" },
    };

    const postModel: Pick<Model<PostStructure>, "findById"> = {
      findById: jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(null) }),
    };

    test("Then it should next the error and return a 406 status code and a 'Post ID not correct' error", async () => {
      const error = new ServerError(
        statusCodes.NOT_FOUND,
        "Post to retreive can not be found",
      );
      const postController = new PostController(
        postModel as Model<PostStructure>,
      );

      await postController.getPost(
        req as PostsRequest,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
