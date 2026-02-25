import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  db: {
    // connection URI
    MongoURI: process.env.MONGO_URI as string
  }
} as const;
