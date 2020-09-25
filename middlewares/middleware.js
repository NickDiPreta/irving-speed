import nextConnect from "next-connect";
import corsMiddleware from "./corsMiddleware";

const middleware = nextConnect();

middleware.use(corsMiddleware);

export default middleware;
