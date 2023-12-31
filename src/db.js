import fs from "node:fs/promises";
import { fileURLToPath } from "url";

const DB_PATH = fileURLToPath(new URL("../db.json", import.meta.url));

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf8");
  return await JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const insertDB = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
