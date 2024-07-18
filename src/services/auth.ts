import { http } from "./http";

interface loginParams {
  username: string;
  password: string;
}

export const login = async ({ username, password }: loginParams) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await http({
      url: 'login',
      method: 'POST',
      body: formData,
      contentType: 'multipart/form-data'
    })
    return response
  } catch (error) {
    return error
  }
}