export interface PostStructure {
  _id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
  publishDate: Date;
  author: string;
}

export type PostData = Omit<PostStructure, "_id">;

export interface ResponseBody {
  posts: PostData[];
}
