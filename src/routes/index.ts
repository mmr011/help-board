import express, { Router, Response } from 'express';
import { userRouter } from './userRoutes';
import { jobRoutes } from './jobRoutes';
import { organizationRoute } from './organizationRoutes';

export const router: Router = express.Router();


// Health test
router.get('/health', (_, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
});

router.use('/users', userRouter);
router.use('/jobs', jobRoutes);
router.use('/organizations', organizationRoute);

