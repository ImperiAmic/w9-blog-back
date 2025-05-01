import { StatusCodes } from "./types.js";

const statusCodes = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} satisfies StatusCodes;

export default statusCodes;
