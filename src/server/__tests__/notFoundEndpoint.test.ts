import request from "supertest";
import app from "../app.js";

describe("Given the GET '/paquirri' endpoint (which does not exist)", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 404 status code and an 'Endpoint not found' error", async () => {
      interface Body {
        error: string;
      }

      const expectedStatusCode = 404;
      const expectedError = "Endpoint not found";

      const response = await request(app).get("/paquirri");

      const responseBody = response.body as Body;

      expect(response.status).toBe(expectedStatusCode);
      expect(responseBody.error).toBe(expectedError);
    });
  });
});
