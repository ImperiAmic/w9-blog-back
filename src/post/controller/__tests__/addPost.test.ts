import { Model } from "mongoose";
import { PostStructure } from "../../types.js";
import PostController from "../PostController.js";
import { PostsRequest } from "../types.js";
import { macAndCheeseDto, pulledPorkDto } from "../../dto/fixtures.js";
import { Response } from "express";
import statusCodes from "../../../globals/statusCodes.js";
import ServerError from "../../../server/ServerError/ServerError.js";

describe("Given the addPost method of PostController", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When it receives a request with a mac and cheese recipe, and a response", () => {
    const postModel: Pick<Model<PostStructure>, "findOne" | "create"> = {
      findOne: jest.fn().mockReturnValue(null),
      create: jest.fn().mockReturnValue({
        ...macAndCheeseDto,
        save: jest.fn(),
      }),
    };

    const postController = new PostController(
      postModel as Model<PostStructure>,
    );

    const req: Pick<PostsRequest, "body"> = {
      body: macAndCheeseDto,
    };

    test("Then it should call the response's status method with status code 201", async () => {
      await postController.addPost(req as PostsRequest, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call the response's json method with the mac and cheese recipe", async () => {
      await postController.addPost(req as PostsRequest, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          post: expect.objectContaining({
            title: macAndCheeseDto.title,
          }),
        }),
      );
    });
  });

  describe("When it receives a request with a pulled pork recipe that already exists, and a next function", () => {
    const postModel: Pick<Model<PostStructure>, "findOne" | "create"> = {
      findOne: jest.fn().mockReturnValue(pulledPorkDto),
      create: jest.fn().mockReturnValue({
        ...macAndCheeseDto,
        save: jest.fn(),
      }),
    };

    const postController = new PostController(
      postModel as Model<PostStructure>,
    );

    const req: Pick<PostsRequest, "body"> = {
      body: macAndCheeseDto,
    };

    test("Then it should call the next function with error 409 'Post with this title already exists'", async () => {
      await postController.addPost(req as PostsRequest, res as Response, next);

      const expectedError = new ServerError(
        statusCodes.CONFLICT,
        "Post with this title already exists",
      );

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
