import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

// Mock database to store Users
const users: User[] = [{
  id: '1',
  email: 'test@gmail.com',
}, {
  id: '2',
  email: 'test@gmail.com',
}];

export const userController = {
  getUser(req: Request, res: Response, next: NextFunction) {
    let { id } = req.params;

    if (!id || (id as string).trim() === '') {
      return res.status(404).json({ error: 'Not found' })
    };

    let user = users.find(u => u.id === id)

    if (!user) {
      return res.status(404).json({ error: 'Not found' })
    };

    return res.status(200).json({ user });
  },

  listUsers(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({ users: users });
  },

  createUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);

    return
  },
}
