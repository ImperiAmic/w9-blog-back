import { Request, Response } from "express";
import handleHealthCheck from "./handleHealthCheck.js";
import statusCodes from "../../../globals/statusCodes.js";

describe("Given the handleHealthCheck middleware", () => {
  describe("When it receives a response", () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = statusCodes.OK;

      handleHealthCheck(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with message 'OK'", () => {
      const expectedMessage = "OK";

      handleHealthCheck(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: expectedMessage });
    });
  });
});
