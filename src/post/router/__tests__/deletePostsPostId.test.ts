import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { callos, conejo, crocretas, pajaritos } from "../../fixtures.js";
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

describe("Given the DELETE /posts/:postId endpoint", () => {
  describe("When it receives a request with 'Conejo en escabeche del Bar Amadeo' post", () => {
    test("Then is should response with a 200 status code and 'Conejo en escabeche del Bar Amadeo' post", async () => {
      const expectedStatusCode = 200;
      const expectedDeletedPost = conejo;

      const response = await request(app)
        .delete("/posts/cccccccccccccccccccccccc")
        .send(conejo);

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body.post).toEqual(
        expect.objectContaining({
          title: expectedDeletedPost.title,
          author: expectedDeletedPost.author,
          content: expectedDeletedPost.content,
          imageAlt: expectedDeletedPost.imageAlt,
          imageUrl: expectedDeletedPost.imageUrl,
          tags: expectedDeletedPost.tags,
        }),
      );
    });
  });

  describe("When it receives a request with unexisting 'Crocretas de Bacalao del Bar Amadeo' post", () => {
    test("Then is should response with a 404 status code and 'Post to delete can not be found' error message", async () => {
      const expectedStatusCode = 404;
      const expectedErrorMessage = { error: "Post to delete can not be found" };

      const response = await request(app)
        .delete("/posts/ffffffffffffffffffffffff")
        .send(crocretas);

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body).toStrictEqual(expectedErrorMessage);
    });
  });

  describe("When it receives a request with 'Callos del Bar Amadeo' post but incomplete postId", () => {
    test("Then is should response with a 406 status code and 'Post ID not correct' error message", async () => {
      const expectedStatusCode = 406;
      const expectedErrorMessage = { error: "Post ID not correct" };

      const response = await request(app)
        .delete("/posts/aaaaaaaaaaaaaaaaaaaaaaa")
        .send(callos);

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body).toStrictEqual(expectedErrorMessage);
    });
  });
});
