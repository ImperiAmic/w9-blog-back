import { NextFunction, Response } from "express";
import { PostControllerStructure, PostsRequest } from "./types.js";
import { Model } from "mongoose";
import { PostStructure } from "../types.js";
import statusCodes from "../../globals/statusCodes.js";
import { mapPostDataDtoToPostData } from "../dto/mappers.js";
import { PostDataDto } from "../dto/types.js";
import ServerError from "../../server/ServerError/ServerError.js";

class PostController implements PostControllerStructure {
  constructor(private postModel: Model<PostStructure>) {}

  public getPosts = async (req: PostsRequest, res: Response): Promise<void> => {
    let { pageNumber } = req.query;

    if (!pageNumber) {
      pageNumber = "1";
    }

    const toStartingPosition = (Number(pageNumber) - 1) * 5;
    const postsLimit = 5;

    const posts = await this.postModel
      .find<PostStructure>({})
      .sort({ publishDate: -1 })
      .skip(toStartingPosition)
      .limit(postsLimit)
      .exec();

    const postsTotal = await this.postModel.countDocuments();

    res.status(statusCodes.OK).json({ posts, postsTotal });
  };

  public addPost = async (
    req: PostsRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const postDataDto = req.body as PostDataDto;

    const existingPost = await this.postModel.findOne({
      title: postDataDto.title,
    });

    if (existingPost) {
      const error = new ServerError(
        statusCodes.CONFLICT,
        "Post with this title already exists",
      );

      next(error);
      return;
    }

    const postData = mapPostDataDtoToPostData(postDataDto);

    const newPost = await this.postModel.create(postData);
    (await newPost).save();

    res.status(statusCodes.CREATED).json(newPost);
  };
}

export default PostController;
