import { MongoClient, ServerApiVersion } from "mongodb"
import { config } from '../config';

const client: MongoClient = new MongoClient(config.db.MongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log('Pinged your deployment. Your successfully connected to MongoDB.');
  } finally {
    await client.close();
  }
};

