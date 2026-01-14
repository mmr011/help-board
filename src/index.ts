import express, { Application, Response } from 'express';
import dotenv from 'dotenv';

// configs
dotenv.config();
const PORT = process.env.PORT;
const app: Application = express();

app.get('/', (_, res: Response) => {
  res.status(200).send('Hello Guys!');
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
}).on('error', (err) => {
  throw new Error(err.message)
});
