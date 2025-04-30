import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import { callos, pajaritos } from "../../fixtures.js";
import { ResponseBody } from "../../types.js";
import app from "../../../server/app.js";
import Post from "../../model/Post.js";

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

describe("Given the GET /posts endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with a 200 status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(app).get("/posts");

      expect(response.status).toBe(expectedStatusCode);
    });

    test("Then it should response with 'Callos del Bar Amadeo' and 'Pajaritos del Bar Amadeo' recipies", async () => {
      const expectedCallosRecipeTitle = "Callos del Bar Amadeo";
      const expectedPajaritosRecipeTitle = "Pajaritos del Bar Amadeo";

      const response = await request(app).get("/posts");
      const responseBody = response.body as ResponseBody;

      expect(responseBody.posts).toContainEqual(
        expect.objectContaining({ title: expectedCallosRecipeTitle }),
      );
      expect(responseBody.posts).toContainEqual(
        expect.objectContaining({ title: expectedPajaritosRecipeTitle }),
      );
    });
  });
});
