"use client";

import { useState } from "react";
import { Todo } from "./todos/types";
import TodoForm from "./todos/todoForm";
import TodoList from "./todos/todoList";
import TodoFilter from "./todos/todoFilter";

interface HomeClientProps {
  initialTodos: Todo[];
}

const HomeClient: React.FC<HomeClientProps> = ({ initialTodos }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);

  const addTodo = async (todo: Todo) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://669a4abc9ba098ed61ff176a.mockapi.io/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...todo }),
        }
      );
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } finally {
      setLoading(false);
    }
  };

  const editTodo = async (todo: Todo) => {
    if (!editingTodo) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://669a4abc9ba098ed61ff176a.mockapi.io/todos/${editingTodo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );
      const updatedTodo = await response.json();
      setTodos(
        todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
      setEditingTodo(null);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string | undefined) => {
    await fetch(`https://669a4abc9ba098ed61ff176a.mockapi.io/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleteTodo = async (id: string | undefined) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    const response = await fetch(
      `https://669a4abc9ba098ed61ff176a.mockapi.io/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      }
    );
    const updatedTodo = await response.json();
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-4 gap-8">
      <TodoForm
        onSubmit={editingTodo ? editTodo : addTodo}
        editingTodo={editingTodo}
        loading={loading}
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onEdit={setEditingTodo}
        onDelete={deleteTodo}
        onToggleComplete={toggleCompleteTodo}
      />
    </main>
  );
};

export default HomeClient;
