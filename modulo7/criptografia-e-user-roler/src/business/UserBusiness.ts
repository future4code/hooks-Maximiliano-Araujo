import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";
import { User, UserRoles } from "../types/User";
import { UserDTO } from "../types/UserDTO";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();
const hashManager = new HashManager() 

export class UserBusiness {
  async signUp(user: UserDTO) {
    try {

      const {  email, password, role } = user;

      if (!user.email || user.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      if (!user.password || user.password.length < 6) {
        throw new Error("Invalid password");
      }

      if (role !== "ADMIN" && role !== "NORMAL") {
        throw new Error("Cargo inválido");
      }

      const id = generateId();

      const hashPassword: string = await hashManager.hash(user.password) 


      const newUser: User = {
        id,
        email: user.email,
        password: hashPassword,
        role: UserRoles[role]
      };

      await userDatabase.signUp(newUser);
      const token = authenticator.generateToken({ id });

      return token;
    } catch (error: any) {
      return error.message;
    }
  }

  async login(email: string, password: string) {
    try {
      if(!email || email.indexOf("@") === -1) {
        throw new Error("email inválido")
      }

      const user = await userDatabase.getUserByEmail(email)

      const isValidPassword = await hashManager.compare(password, user.password)

       if (!isValidPassword) {
        throw new Error ("senha inválida")
      }

      const token = authenticator.generateToken({id: user.id})

      return token 
    } catch (error) {
      return error.message
    }
  }

  async getUserLogged(token: string) {
    try {
      const authenticationData = authenticator.getData(token)
      const user = await userDatabase.getUserById(authenticationData.id)

      return user
    } catch (error: any) {
      return error.message
    }
  }
}