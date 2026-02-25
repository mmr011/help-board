import express, { Application, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './routes';
import { run } from './config/database';
import { config } from './config';

// configs
dotenv.config();
const app: Application = express();

run().catch(console.error);

// Logger, Parser & Security middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_, res: Response) => {
  res.status(200).send('Hello World!');
});

// Mount all routes under `/api`
app.use('/api', router);

app.listen(config.PORT, () => {
  console.log(`Server running at port: ${config.PORT}`);
}).on('error', (err) => {
  throw new Error(err.message)
});
