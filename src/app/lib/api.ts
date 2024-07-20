import { Todo } from "../components/todos/types";

export const addTodo = async (todo: Todo, url: string): Promise<Todo> => {
  const response = await fetch(url, {
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
  todo: Todo,
  url: string
): Promise<Todo> => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (
  id: string | undefined,
  url: string
): Promise<void> => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

export const toggleCompleteTodo = async (
  id: string | undefined,
  todo: Todo,
  url: string
): Promise<Todo> => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });
  return response.json();
};
