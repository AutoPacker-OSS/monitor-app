import { AsyncAction } from ".";

export const login: AsyncAction<{
  username: string;
  password: string;
}> = async ({ state, effects }, credentials) => {
  try {
    await effects.api.auth.login(credentials.username, credentials.password);

    // const user = await effects.api.user.getUserData();
    state.username = "OK";
  } catch (error) {
    console.log(error);
    alert("fail");
  }
};
