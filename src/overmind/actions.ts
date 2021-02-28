import { AsyncAction } from ".";

export const login: AsyncAction<{
  username: string;
  password: string;
}> = async ({ state, effects }, credentials) => {
  
};
