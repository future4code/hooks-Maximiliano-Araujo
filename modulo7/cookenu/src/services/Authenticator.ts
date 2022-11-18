import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/AuthenticationData";

export class Authenticator {
  public generateToken = (id: AuthenticationData) => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "5h",
    });
    return token;
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    return payload.id;
  };
}
