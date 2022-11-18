import BaseDatabase from "./BaseDatabase";
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {
  public async signUp(user: User) {
    await BaseDatabase.connection("cookenu").insert({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    });
  }

  public async getUserByEmail(email: string) {
    const result = await BaseDatabase.connection("cookenu")
      .select()
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string) {
    const result = await BaseDatabase.connection("cookenu")
      .select("id", "name", "email")
      .where({ id });

    return result[0];
  }

  public async getFriendById(id: string) {
    const result = await BaseDatabase.connection("cookenu")
      .select("id", "name", "email")
      .where({ id });

    return result[0];
  }
}
