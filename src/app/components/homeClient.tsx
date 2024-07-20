"use client";

import { useState } from "react";
import { Todo } from "./todos/types";
import TodoForm from "./todos/todoForm";
import TodoList from "./todos/todoList";
import TodoFilter from "./todos/todoFilter";
import { toast } from "react-hot-toast";
import Modal from "./modal";
import { addTodo, editTodo, deleteTodo, toggleCompleteTodo } from "../lib/api";
import SunIcon from "./icons/sunIcon";
import MoonIcon from "./icons/moonIcon";

type HomeClientProps = {
  initialTodos: Todo[];
};

const HomeClient: React.FC<HomeClientProps> = ({ initialTodos }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleAddTodo = async (todo: Todo) => {
    setLoading(true);
    try {
      const newTodo = await addTodo(todo);
      setTodos([...todos, newTodo]);
      toast.success("Todo has been added");
    } catch (error) {
      toast.error("Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

  const handleEditTodo = async (todo: Todo) => {
    if (!editingTodo) return;

    setLoading(true);
    try {
      const updatedTodo = await editTodo(editingTodo.id, todo);
      setTodos(
        todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
      setEditingTodo(null);
      toast.success("Todo has been updated");
    } catch (error) {
      toast.error("Failed to update todo");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTodo = async (id: string | undefined) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success("Todo has been removed");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  const handleToggleCompleteTodo = async (id: string | undefined) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    try {
      const updatedTodo = await toggleCompleteTodo(id, todo);
      setTodos(
        todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
    } catch (error) {
      toast.error("Failed to toggle todo completion");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingTodo(null);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`${isDarkMode ? "dark" : "light"}`}>
      <button
        onClick={handleToggleTheme}
        className="text-gray-100 absolute right-8 top-8"
      >
        {isDarkMode ? (
          <SunIcon width={24} height={24} />
        ) : (
          <MoonIcon width={24} height={24} />
        )}
      </button>

      <div className="min-h-screen flex flex-col items-center p-4 gap-8 z-1 dark:bg-gray-900 dark:text-gray-100 ">
        <Modal open={openModal} onClose={handleCloseModal}>
          <TodoForm
            onSubmit={editingTodo ? handleEditTodo : handleAddTodo}
            editingTodo={editingTodo}
            loading={loading}
            setOpenModal={setOpenModal}
          />
        </Modal>
        <section className="grid w-full max-w-md grid-cols-2 sm:grid-cols-3 gap-4">
          <TodoFilter filter={filter} setFilter={setFilter} />
          <button
            onClick={() => setOpenModal(true)}
            className="btn bg-blue-500 hover:bg-blue-400 col-span-1 sm:col-span-2"
          >
            Add new todo
          </button>
        </section>
        <TodoList
          todos={filteredTodos}
          onEdit={setEditingTodo}
          onDelete={handleDeleteTodo}
          onToggleComplete={handleToggleCompleteTodo}
          setOpenModal={setOpenModal}
        />
      </div>
    </main>
  );
};

export default HomeClient;
