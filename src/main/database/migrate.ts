import db from "./connection";
import * as m001 from "./migrations/001-initial-schema";

const migrations = [m001];

export function runMigrations() {
    const current = db.pragma('user.version', {simple: true}) as number;

    migrations.slice(current).forEach((migration, index) => {
        db.transaction(() => {
            db.exec(migration.sql);
            db.pragma(`user.version = ${current + index + 1}`);
        })();
        console.log(`[db] applied migration ${migration.name}`)
    });
}