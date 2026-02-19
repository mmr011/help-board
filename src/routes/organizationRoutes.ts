import express, { Router, Response } from 'express';

export const organizationRoute: Router = express.Router();

organizationRoute.get('', (req, res, next) => {
  res.status(200).send('Hello World from organizationRoute!');

})

