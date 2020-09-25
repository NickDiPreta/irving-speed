import Cors from "cors";
import initMiddleware from "../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and PUT
    methods: ["GET", "POST", "PUT"],
  })
);

export default async (req, res, next) => {
  const response = await cors(req, res);

  if (response instanceof Error) {
    throw new Error("Unable to initialize cors");
  }
  return next();
};
