import { Transaction } from "src/shared/types"
import db from "../database/connection"

export const transactionRepository = {
    findAll(): Transaction[] {
        return db.prepare("SELECT * FROM transactions").all() as Transaction[]
    },

    findById(id: number): Transaction | undefined {
        return db.prepare("SELECT * FROM transactions WHERE id = ?").get(id) as Transaction | undefined
    },

    findByUserId(userId: number): Transaction[] | undefined {
        return db.prepare("SELECT * FROM transactions WHERE userId = ?").all(userId) as Transaction[] | undefined
    },

    findByToolId(toolId: number): Transaction[] | undefined {
        return db.prepare("SELECT * FROM transactions WHERE toolId = ?").all(toolId) as Transaction[] | undefined
    },
}