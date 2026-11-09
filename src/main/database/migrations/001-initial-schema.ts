export const name = "001-initial-schema";

export const sql = `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        qrCode TEXT NOT NULL UNIQUE,
        schoolNumber TEXT NOT NULL UNIQUE,
        firstName TEXT NOT NULL,
        middleName TEXT,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phoneNumber TEXT,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        department TEXT NOT NULL,
        yearLevel TEXT,
        status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive'))
    );

    CREATE TABLE tools (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tagNumber TEXT NOT NULL UNIQUE,
        qrCode TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        description TEXT,
        serialNumber TEXT,
        categoryCode TEXT,
        roomName TEXT,
        locationCode TEXT,
        count INTEGER NOT NULL DEFAULT 1 CHECK (count >= 0),
        condition TEXT,
        remarks TEXT
    );

    CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL REFERENCES users(id),
        toolId INTEGER NOT NULL REFERENCES tools(id),
        borrowCount INTEGER NOT NULL CHECK (borrowCount > 0),
        returnCount INTEGER NOT NULL DEFAULT 0 CHECK (returnCount >= 0 AND returnCount <= borrowCount),
        status TEXT NOT NULL DEFAULT 'Borrowed' CHECK (status IN ('Borrowed', 'Partially Returned', 'Returned')),
        remarks TEXT,
        borrowedDate TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        returnedDate TEXT
    );
`