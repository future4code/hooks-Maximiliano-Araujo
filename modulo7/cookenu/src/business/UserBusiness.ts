import { UserDatabase } from "../database/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { User } from "../types/User";
import { UserDTO } from "../types/UserDTOs";

const userDataBase = new UserDatabase();
const authenticator = new Authenticator();
const hashManager = new HashManager();

export class UserBusiness {
  async signUp(user: UserDTO) {
    try {
      const { email, name, password } = user;

      if (!user.email || !user.email.includes("@")) {
        throw new Error("Email inválido");
      } else if (!user.name) {
        throw new Error("Nome inválido");
      } else if (!user.password || user.password.length < 6) {
        throw new Error("Senha inválida");
      }

      const id = generateId();

      const hashPassword: string = await hashManager.hash(user.password);

      const newUser: User = {
        id,
        email: user.email,
        name: user.name,
        password: hashPassword,
      };

      await userDataBase.signUp(newUser);
      const token = authenticator.generateToken({ id });

      return token;
    } catch (error: any) {
      return error.message;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await userDataBase.getUserByEmail(email);

      if (!email || email.indexOf("@email.com") === -1) {
        throw new Error("email inválido");
      }

      const isValidPassword = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new Error("senha inválida");
      }

      const token = authenticator.generateToken({ id: user.id });

      return token;
    } catch (error) {
      return error.message;
    }
  }

  async getUserLogged(token: string) {
    try {
      const authenticationData = authenticator.getData(token);
      const user = await userDataBase.getUserById(authenticationData.id);

      return user;
    } catch (error: any) {
      return error.message;
    }
  }

  async getFriendProfile(id: string, token: string) {
    try {
      const authenticationData = authenticator.getData(token);

      if (!authenticationData.id) {
        throw new Error("token inválido");
      }

      const user = await userDataBase.getUserById(id);

      return user;
    } catch (error) {
      return error.message;
    }
  }
}
