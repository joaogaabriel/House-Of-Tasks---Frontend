import { Task } from "../../types/task";
import { Api } from "../axios-config";

const getAllByUserId = async (id: string): Promise<Task | Error> => {
  try {
    const { data } = await Api.get(`/tasks/user/${id}?take=100`);

    if (data) {
      return data;
    }
    console.log("data", data);

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar todos as tasks pelo id do usuário."
    );
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      return new Error(`Error ${status}: ${message}`);
    } else {
      return new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

const getOneById = async (id: string): Promise<Task | Error> => {
  try {
    const { data } = await Api.get(`/tasks/${id}`);

    if (data) {
      return data;
    }

    return new Error(
      "Nenhum dado foi retornado ao tentar recuperar uma task pelo id."
    );
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      return new Error(`Error ${status}: ${message}`);
    } else {
      return new Error(`An unexpected error occurred: ${error.message}`);
    }
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
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      throw new Error(`Error ${status}: ${message}`);
    } else {
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

const update = async (id: string, json: Task): Promise<Task | Error> => {
  try {
    const { data } = await Api.put(`/tasks/${id}`, json);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar atualizar uma task.");
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      return new Error(`Error ${status}: ${message}`);
    } else {
      return new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

const remove = async (id: number | string): Promise<Task | Error> => {
  try {
    const { data } = await Api.delete(`/tasks/${id}`);

    if (data) {
      return data;
    }

    return new Error("Nenhum dado foi retornado ao tentar deletar uma  task.");
  } catch (error: any) {
    if (error.response && error.response.data) {
      const message = error.response.data.message;
      const status = error.response.data.status;
      return new Error(`Error ${status}: ${message}`);
    } else {
      return new Error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

export const TaskService = {
  getAllByUserId,
  getOneById,
  create,
  update,
  remove,
};
