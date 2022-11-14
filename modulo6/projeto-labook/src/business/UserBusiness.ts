import { UserDatabase } from "../data/UserDatabase";
import { generateId } from "../services/generateId";
import { user } from "../types/user";

export class UserBusiness {
  async create(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      throw new Error('"name", "email" and "password" must be provided');
    }

    const user: user = {
        id: generateId(),
        name,
        email,
        password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(user)
  }
}
