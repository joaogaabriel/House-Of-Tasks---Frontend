import { Category } from "../../types/category";
import { Api } from "../axios-config";

const formatApiError = (error: any, context: string): Error => {
  if (error.response && error.response.data) {
    const message = error.response.data.message;
    const status = error.response.data.status;
    return new Error(`Erro ${status} ao ${context}: ${message}`);
  } else {
    return new Error(`Erro inesperado ao ${context}: ${error.message}`);
  }
};

const getAll = async (): Promise<Category[]> => {
  try {
    const { data } = await Api.get(`/categories?take=100`);

    if (data && data.data) {
      return data.data as Category[];
    }

    return [];
  } catch (error: any) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
};

const create = async (json: Category): Promise<Category> => {
  try {
    const { data } = await Api.post("/category", json);

    if (data) {
      return data as Category;
    }

    throw new Error("Nenhum dado foi retornado ao tentar criar uma categoria.");
  } catch (error: any) {
    throw formatApiError(error, "criar uma categorias");
  }
};

const update = async (id: string, json: Category): Promise<Category> => {
  try {
    const { data } = await Api.put(`/category/${id}`, json);

    if (data) {
      return data as Category;
    }

    throw new Error("Nenhum dado foi retornado ao tentar atualizar uma categoria.");
  } catch (error: any) {
    throw formatApiError(error, "atualizar uma categoria");
  }
}

const remove = async (id: number | string): Promise<void> => {
  try {
    await Api.delete(`/category/${id}`);
  } catch (error: any) {
    throw formatApiError(error, "deletar uma categoria");
  }
}

export const CategoryService = {
  getAll,
  create,
  update,
  remove,
};

