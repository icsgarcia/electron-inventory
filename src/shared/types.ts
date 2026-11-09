export const USER_STATUS = {
    Active: 'Active',
    Inactive: 'Inactive',
} as const;

export const TRANSACTION_STATUS = {
  Borrowed: 'Borrowed',
  PartiallyReturned: 'Partially Returned',
  Returned: 'Returned',
} as const;

export type UserStatus = typeof USER_STATUS[keyof typeof USER_STATUS];
export type TransactionStatus = typeof TRANSACTION_STATUS[keyof typeof TRANSACTION_STATUS];

export interface User {
    id: number;
    qrCode: string;
    schoolNumber: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    number: string | null;
    password: string;
    role: string;
    department: string;
    yearLevel: string | null;
    status: string;
}

export interface Tool {
    id: number;
    tagNumber: string | null;
    qrCode: string;
    name: string;
    description: string | null;
    serialNumber: string | null;
    categoryCode: string | null;
    roomName: string | null;
    locationCode: string | null;
    count: number;
    condition: string | null;
    remarks: string;
}

export interface Transaction {
    id: number;
    userId: number;
    toolId: number;
    borrowCount: number;
    returnCount: number | null;
    status: string;
    remarks: string | null;
    borrowedDate: string;
    returnedDate: string | null;
}