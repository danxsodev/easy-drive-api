import { Router, type Request, type Response } from "express";

export const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.send("Welcome Easy Drive API");
});
