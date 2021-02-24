import { IAuthService } from "./IAuthService";

export class AuthService implements IAuthService {
  async login(username: string, password: string): Promise<boolean> {
    return username === "OK";
  }
}
