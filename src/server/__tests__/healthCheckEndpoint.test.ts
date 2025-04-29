import request from "supertest";
import app from "../app.js";

describe("Given the GET '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status code and a 'OK' message", async () => {
      interface Body {
        message: string;
      }

      const expectedStatusCode = 200;
      const expectedMessage = "OK";

      const response = await request(app).get("/");

      const responseBody = response.body as Body;

      expect(response.status).toBe(expectedStatusCode);
      expect(responseBody.message).toBe(expectedMessage);
    });
  });
});
