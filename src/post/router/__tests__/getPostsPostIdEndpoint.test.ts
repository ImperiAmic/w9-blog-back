import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { callos, conejo, pajaritos } from "../../fixtures.js";
import connectToDatabase from "../../../database/connectToDatabase.js";
import Post from "../../model/Post.js";
import app from "../../../server/app.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const serverUri = server.getUri();
  await connectToDatabase(serverUri);

  await Post.create(callos, pajaritos, conejo);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given the GET /posts/:postId endpoint", () => {
  describe("When it receives a request with 'Callos del Bar Amadeo' post", () => {
    test("Then is should response with a 200 status code and 'Callos del Bar Amadeo' post", async () => {
      const expectedStatusCode = 200;
      const expectedRetrievedPost = callos;

      const response = await request(app).get(
        "/posts/aaaaaaaaaaaaaaaaaaaaaaaa",
      );

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body.post).toEqual(
        expect.objectContaining({
          title: expectedRetrievedPost.title,
          author: expectedRetrievedPost.author,
          content: expectedRetrievedPost.content,
          imageAlt: expectedRetrievedPost.imageAlt,
          imageUrl: expectedRetrievedPost.imageUrl,
          tags: expectedRetrievedPost.tags,
        }),
      );
    });
  });

  describe("When it receives a request with unexisting 'Crocretas de Bacalao del Bar Amadeo' post", () => {
    test("Then is should response with a 404 status code and 'Post to retreive can not be found' error message", async () => {
      const expectedStatusCode = 404;
      const expectedErrorMessage = {
        error: "Post to retreive can not be found",
      };

      const response = await request(app).get(
        "/posts/ffffffffffffffffffffffff",
      );

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body).toStrictEqual(expectedErrorMessage);
    });
  });

  describe("When it receives a request with 'Callos del Bar Amadeo' post but incomplete postId", () => {
    test("Then is should response with a 406 status code and 'Post ID not correct' error message", async () => {
      const expectedStatusCode = 406;
      const expectedErrorMessage = { error: "Post ID not correct" };

      const response = await request(app).get("/posts/aaaaaaaaaaaaaaaaaaaaaaa");

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body).toStrictEqual(expectedErrorMessage);
    });
  });
});
