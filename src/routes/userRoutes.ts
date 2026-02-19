import express, { Router, Request, Response, NextFunction } from "express";

export const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello from userRouter!');
});

userRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});

userRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});

userRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});

userRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});


