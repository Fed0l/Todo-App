import pg from "pg";
import { postgressEssentails } from "../secret/databaseSecrets.js";

const { Client } = pg;

export const query = async (sql, params) => {
  let client;
  try {
    client = new Client(postgressEssentails);
    await client.connect();
    const res = await client.query(sql, params);
    return res.rows;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    await client.end();
    console.log("connection closed");
  }
};
 