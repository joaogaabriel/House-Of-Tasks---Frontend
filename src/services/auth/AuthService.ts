import { ILogin } from "../../types/login";
import { User } from "../../types/user";
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
      localStorage.setItem("user", JSON.stringify(data.user));
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
const getByEmail = async (email: string): Promise<User> => {
  const { data } = await Api.get(`/users/email/${email}`);
  return data;
};

const create = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  try {
    const { data } = await Api.post("/users", { name, email, password });

    if (data) {
      return data as User;
    }

    throw new Error("Nenhum dado foi retornado ao tentar criar um Usuario.");
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      throw new Error(`Error ${status}: ${message}`);
    } else {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

export const AuthService = {
  auth,
  create,
  getByEmail,
};
