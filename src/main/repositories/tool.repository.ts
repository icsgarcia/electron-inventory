import { Tool } from "src/shared/types"
import db from "../database/connection"

export const toolRepository = {
    findAll(): Tool[] {
        return db.prepare("SELECT * FROM tools").all() as Tool[]
    },

    findById(tagNumber: string): Tool | undefined {
        return db.prepare("SELECT * FROM tools WHERE tagNumber = ?").get(tagNumber) as Tool | undefined
    },

    findByQrCode(qrCode: string): Tool | undefined {
        return db.prepare("SELECT * FROM tools WHERE qrCode = ?").get(qrCode) as Tool | undefined
    },

    insert(tool: Omit<Tool, "id">): number {
        const result = db.prepare(`
            INSERT INTO tools (tagNumber, qrCode, name, description, serialNumber, categoryCode, roomName, locationCode, count, condition, remarks)
            VALUES (@tagNumber, @qrCode, @name, @description, @serialNumber, @categoryCode, @roomName, @locationCode, @count, @condition, @remarks)  
        `).run(tool)
        
        return Number(result.lastInsertRowid)
    }
}