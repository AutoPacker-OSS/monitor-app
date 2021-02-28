import { AsyncAction } from "overmind";

export const saveToken: AsyncAction<string> = async ({ state }, token) => {
  // state.auth.token = token;
}
