import { Todo } from "../components/todos/types";

const API_URL = "https://669a4abc9ba098ed61ff176a.mockapi.io/todos";

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...todo }),
  });
  return response.json();
};

export const editTodo = async (
  id: string | undefined,
  todo: Todo
): Promise<Todo> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (id: string | undefined): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const toggleCompleteTodo = async (
  id: string | undefined,
  todo: Todo
): Promise<Todo> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });
  return response.json();
};
