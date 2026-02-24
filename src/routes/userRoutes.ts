import express, { Router, Request, Response, NextFunction } from "express";
import { userController } from "../controllers/userController";

export const userRouter: Router = express.Router();

userRouter.get('/', userController.listUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.createUser);

userRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});

userRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Hello World from userRouter!');
});


