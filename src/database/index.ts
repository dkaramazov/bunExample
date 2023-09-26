import { Database } from "bun:sqlite";

const db = new Database(":memory:");

db.query(
    `CREATE TABLE IF NOT EXISTS MESSAGES(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
  );`
  ).run();

export default () => db;