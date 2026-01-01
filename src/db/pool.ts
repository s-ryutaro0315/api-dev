import { Pool } from 'pg'
import { env } from "../config/env";

export const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

export const connectToDB = async () => {
  try {
    await pool.connect();
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.log(err);
  }
};