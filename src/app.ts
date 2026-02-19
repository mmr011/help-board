import express, { Application, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

// configs
dotenv.config();
const PORT = process.env.PORT;
const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_, res: Response) => {
  res.status(200).send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
}).on('error', (err) => {
  throw new Error(err.message)
});
