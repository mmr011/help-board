import express, { Router } from "express";

export const jobRoutes: Router = express.Router();

jobRoutes.get('', (req, res, next) => {
  res.status(200).send('Hello World from jobRoutes!');
})
