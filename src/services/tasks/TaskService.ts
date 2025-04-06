import { Task } from "../../types/task";
import { Api } from "../axios-config";

const getAllByUserId = async (id: string): Promise<Task[]> => {
  try {
    const { data } = await Api.get(`/tasks/user/${id}?take=100`);

    if (data && data.items) {
      return data.items as Task[];
    }

    return [];
  } catch (error: any) {
    console.error("Erro ao buscar tasks:", error);
    return [];
  }
};

const getOneById = async (id: string): Promise<Task> => {
  try {
    const { data } = await Api.get(`/tasks/${id}`);

    if (data) {
      return data as Task;
    }

    throw new Error("Nenhum dado foi retornado ao tentar recuperar uma task.");
  } catch (error: any) {
    throw formatApiError(error, "recuperar uma task pelo ID");
  }
};

const create = async (json: Task): Promise<Task> => {
  try {
    const { data } = await Api.post("/tasks", json);

    if (data) {
      return data as Task;
    }

    throw new Error("Nenhum dado foi retornado ao tentar criar uma task.");
  } catch (error: any) {
    throw formatApiError(error, "criar uma task");
  }
};

const update = async (id: string, json: Task): Promise<Task> => {
  try {
    const { data } = await Api.put(`/tasks/${id}`, json);

    if (data) {
      return data as Task;
    }

    throw new Error("Nenhum dado foi retornado ao tentar atualizar uma task.");
  } catch (error: any) {
    throw formatApiError(error, "atualizar uma task");
  }
};

const remove = async (id: number | string): Promise<void> => {
  try {
    await Api.delete(`/tasks/${id}`);
  } catch (error: any) {
    throw formatApiError(error, "deletar uma task");
  }
};

// Função auxiliar para lidar com erros da API
const formatApiError = (error: any, context: string): Error => {
  if (error.response && error.response.data) {
    const message = error.response.data.message;
    const status = error.response.data.status;
    return new Error(`Erro ${status} ao ${context}: ${message}`);
  } else {
    return new Error(`Erro inesperado ao ${context}: ${error.message}`);
  }
};

export const TaskService = {
  getAllByUserId,
  getOneById,
  create,
  update,
  remove,
};
