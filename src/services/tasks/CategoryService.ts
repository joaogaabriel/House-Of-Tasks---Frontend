import { Category } from "../../types/category";
import { Api } from "../axios-config";

const getAllByUserId = async (id: string): Promise<Category[]> => {
  // try {
  //   const { data } = await Api.get(`/tasks/user/${id}?take=100`);

  //   if (data && data.data) {
  //     return data.data as Task[];
  //   }

  //   return [];
  // } catch (error: any) {
  //   console.error("Erro ao buscar tasks:", error);
  //   return [];
  // }

  return [];
};

const create = async (json: Category): Promise<Category> => {
  // try {
  //   const { data } = await Api.post("/tasks", json);

  //   if (data) {
  //     return data as Task;
  //   }

  //   throw new Error("Nenhum dado foi retornado ao tentar criar uma task.");
  // } catch (error: any) {
  //   throw formatApiError(error, "criar uma task");
  // }

  throw new Error();
};

const update = async (id: string, json: Category): Promise<Category> => {
  throw new Error(); 
}

const remove = async (id: number | string): Promise<void> => {
}

export const CategoryService = {
  getAllByUserId,
  create,
  update,
  remove,
};

