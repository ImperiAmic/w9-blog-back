import mongoose, { Schema } from "mongoose";
import { PostStructure } from "../types.js";

const PostSchema = new Schema<PostStructure>(
  {
    publishDate: {
      type: Date,
      default: Date.now(),
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const Post = mongoose.model("Post", PostSchema, "posts");

export default Post;
