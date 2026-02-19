import express, { Application, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './routes';

// configs
dotenv.config();
const PORT = process.env.PORT;
const app: Application = express();

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

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
}).on('error', (err) => {
  throw new Error(err.message)
});
