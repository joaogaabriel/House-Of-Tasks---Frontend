import { Tag } from "../../types/tag";
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

const getAll = async (): Promise<Tag[]> => {
  try {
    const { data } = await Api.get(`/tags?take=100`);

    console.log(data)

    if (data && data.data) {
      return data.data as Tag[];
    }

    return [];
  } catch (error: any) {
    console.error("Erro ao buscar tags:", error);
    return [];
  }
};

const create = async (json: Tag): Promise<Tag> => {
  try {
    const { data } = await Api.post("/tags", json);

    if (data) {
      return data as Tag;
    }

    throw new Error("Nenhum dado foi retornado ao tentar criar uma tag.");
  } catch (error: any) {
    throw formatApiError(error, "criar uma tag");
  }
};

const update = async (id: string, json: Tag): Promise<Tag> => {
  try {
    const { data } = await Api.put(`/tags/${id}`, json);

    if (data) {
      return data as Tag;
    }

    throw new Error("Nenhum dado foi retornado ao tentar atualizar uma categoria.");
  } catch (error: any) {
    throw formatApiError(error, "atualizar uma categoria");
  }
}

const remove = async (id: number | string): Promise<void> => {
  try {
    await Api.delete(`/tags/${id}`);
  } catch (error: any) {
    throw formatApiError(error, "deletar uma categoria");
  }
}

export const TagService = {
  getAll,
  create,
  update,
  remove,
};

