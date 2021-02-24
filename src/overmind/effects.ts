import { MockAuthService } from "../services/auth/MockAuthService";
import { AuthService } from "../services/auth/AuthService";

const isDev = process.env["mode"] === "dev";

export const api = {
  auth: isDev ? new MockAuthService() : new AuthService(),
};
