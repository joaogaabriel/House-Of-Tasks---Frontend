import { ILogin } from "../../types/user";
import { Api } from "../axios-config";

const auth = async (
  email: string,
  password: string
): Promise<ILogin | Error> => {
  try {
    const { data } = await Api.post("/login", {
      email,
      password,
    });

    if (data?.token) {
      localStorage.setItem("token", data.token);
      return data;
    }

    return new Error("Erro no login.");
  } catch (error: any) {
    if (error.response?.data) {
      const { message, status } = error.response.data;
      return new Error(`Erro ${status}: ${message}`);
    } else {
      return new Error(`Erro inesperado: ${error.message}`);
    }
  }
};

export const AuthService = {
  auth,
};
