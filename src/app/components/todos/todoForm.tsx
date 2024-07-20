import { useState, useEffect } from "react";
import { Todo } from "./types";
import SubmitButton from "./submitButton";

type TodoFormProps = {
  onSubmit: (todo: Todo) => void;
  editingTodo: Todo | null;
  loading: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoForm = ({
  onSubmit,
  editingTodo,
  loading,
  setOpenModal,
}: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setCompleted(editingTodo.completed);
    } else {
      setTitle("");
      setCompleted(false);
    }
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, completed });
    setTitle("");
    setCompleted(false);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-md bg-white p-6 rounded shadow-md flex flex-col gap-4 dark:bg-gray-700 dark:border-gray-700"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
        required
        className="w-full p-2 border border-gray-300 h-10 rounded transition duration-200 focus:outline-none focus:border-sky-500 focus:ring-1 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-700"
      />
      <label className="flex items-center w-fit cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2 size-4 cursor-pointer"
        />
        Completed
      </label>
      <SubmitButton editingTodo={editingTodo} loading={loading} />
    </form>
  );
};

export default TodoForm;
