import { useState, useEffect } from "react";
import { Todo } from "./types";
import SubmitButton from "./submitButton";

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
  editingTodo: Todo | null;
  loading: boolean;
}

const TodoForm = ({ onSubmit, editingTodo, loading }: TodoFormProps) => {
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded shadow-md flex flex-col gap-4"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2 size-4"
        />
        Completed
      </label>
      <SubmitButton editingTodo={editingTodo} loading={loading} />
    </form>
  );
};

export default TodoForm;
