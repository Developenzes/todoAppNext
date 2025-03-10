import { Todo } from "./types";

type ButtonProps = {
  editingTodo: Todo | null;
  loading: boolean;
};

const SubmitButton = ({ editingTodo, loading }: ButtonProps) => {
  const buttonText = editingTodo ? "Update Todo" : "Add Todo";
  const loadingText = editingTodo ? "Updating todo..." : "Adding todo...";
  return (
    <button
      type="submit"
      disabled={loading}
      className="btn bg-blue-500 hover:bg-blue-400 "
    >
      {!loading ? buttonText : loadingText}
    </button>
  );
};

export default SubmitButton;
