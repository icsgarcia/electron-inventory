import { User } from "src/shared/types";
import { userRepository } from "../repositories/user.repository";
import bcrypt from "bcryptjs";

export interface NewUserInput {
  qrCode: string;
  schoolNumber: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
  role: string;
  department: string;
  yearLevel?: string;
}

export const userService = {
    list: () => userRepository.findAll(),
    findById: (schoolNumber: number) => userRepository.findById(schoolNumber),

    findByQrCode(qrCode: string): User {
        const user =  userRepository.findByQrCode(qrCode);
        if (!user) {
            throw new Error(`User with QR code ${qrCode} not found`);
        }
        return user;
    },

    async add(input: NewUserInput): Promise<number> {

        const existingUser = userRepository.findByEmail(input.email.trim());

        if (existingUser) {
            throw new Error(`User with email ${input.email} already exists`);
        }

        const hashedPassword = await bcrypt.hash("B4c0/\/", 10);

        return userRepository.insert({
          qrCode: input.qrCode.trim(),
          schoolNumber: input.schoolNumber.trim(),
          firstName: input.firstName.trim(),
          middleName: input.middleName?.trim() || null,
          lastName: input.lastName.trim(),
          email: input.email.trim(),
          phoneNumber: input.phoneNumber?.trim() || null,
          password: hashedPassword,
          role: input.role,
          department: input.department.trim(),
          yearLevel: input.yearLevel?.trim() || null,
        })
    },

    async login(email: string, password: string): Promise<User> {
        const exisitingUser = userRepository.findByEmail(email.trim());
        if (!exisitingUser) {
            throw new Error(`User with email ${email} not found`);
        }

        const user = userRepository.insert
    }
}