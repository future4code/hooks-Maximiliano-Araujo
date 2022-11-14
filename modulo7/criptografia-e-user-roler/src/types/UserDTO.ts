import { UserRoles } from "./User"

export type UserDTO = {
    email: string,
    password: string,
    role: UserRoles
}