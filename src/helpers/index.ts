import { API, Auth } from "aws-amplify";

export async function postData(prompt: string, model: string) {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;

  const apiName = "openai";
  const path = `/${model}`;
  const myInit = {
    headers: {
      Authorization: token
    },
    body: {
      prompt
    }
  };

  return API.post(apiName, path, myInit);
}
