export enum UserRoles {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: string;
    email: string;
    password: string;
    role: UserRoles
}