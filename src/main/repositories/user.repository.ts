import { User } from "src/shared/types"
import db from "../database/connection"

export const userRepository = {
    findAll(): User[] {
        return db.prepare("SELECT * FROM users").all() as User[]
    },

    findById(schoolNumber: number): User | undefined {
        return db.prepare("SELECT * FROM users WHERE schoolNumber = ?").get(schoolNumber) as User | undefined
    },

    findByQrCode(qrCode: string): User | undefined {
        return db.prepare("SELECT * FROM users WHERE qrCode = ?").get(qrCode) as User | undefined
    },

    findByEmail(email: string): User | undefined {
        return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User | undefined
    },

    insert(user: Omit<User, "id" | "status" >): number {
        const result = db.prepare(`
            INSERT INTO users (qrCode, schoolNumber, firstName, middleName, lastName, email, number, password, role, department, yearLevel, status)
            VALUES (@qrCode, @schoolNumber, @firstName, @middleName, @lastName, @email, @phoneNumber, @password, @role, @department, @yearLevel)  
        `).run(user)

        return Number(result.lastInsertRowid)
    },
}