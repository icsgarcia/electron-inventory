import { app } from "electron";
import path from "path";
import Database from "better-sqlite3";

const db = new Database(path.join(app.getPath('userData'), 'tms.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

/** Run several repository calls as one all-or-nothing unit. */
export function runInTransaction<T>(work: () => T): T {
  return db.transaction(work)();
}

export function closeDatabase(): void {
  db.close();
}

export default db;