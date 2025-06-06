import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Post from "../../model/Post.js";
import { callos, conejo, pajaritos } from "../../fixtures.js";
import connectToDatabase from "../../../database/connectToDatabase.js";
import app from "../../../server/app.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const serverUri = server.getUri();
  await connectToDatabase(serverUri);

  await Post.create(callos, pajaritos);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

describe("Given the POST /posts endpoint", () => {
  describe("When it receives a request with 'Conejo en escabeche del Bar Amadeo' post", () => {
    test("Then it should respose with a 201 status code and 'Conejo en escabeche del Bar Amadeo' post", async () => {
      const expectedStatusCode = 201;
      const expectedConejoPost = conejo;

      const response = await request(app).post("/posts").send(conejo);

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body.post).toEqual(
        expect.objectContaining({
          title: expectedConejoPost.title,
          author: expectedConejoPost.author,
          content: expectedConejoPost.content,
          imageAlt: expectedConejoPost.imageAlt,
          imageUrl: expectedConejoPost.imageUrl,
          tags: expectedConejoPost.tags,
        }),
      );
    });
  });

  describe("When it receives a request with 'Callos del Bar Amadeo' reciepe which is already included", () => {
    test("Then it should response with a 409 status code and 'Post with this title already exists' error", async () => {
      const expectedStatusCode = 409;
      const expectedErrorMessage = "Post with this title already exists";

      const response = await request(app).post("/posts").send(callos);

      expect(response.status).toBe(expectedStatusCode);
      expect(response.body.error).toBe(expectedErrorMessage);
    });
  });
});
