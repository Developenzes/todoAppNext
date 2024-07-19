import CompleteIcon from "../../../../public/svg/completeIcon";
import EditIcon from "../../../../public/svg/editIcon";
import IncompleteIcon from "../../../../public/svg/incompleteIcon";
import RemoveIcon from "../../../../public/svg/removeIcon";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string | undefined) => void;
  onToggleComplete: (id: string | undefined) => void;
}

const TodoItem = ({
  todo,
  onEdit,
  onDelete,
  onToggleComplete,
}: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded shadow-sm">
      <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`p-1 transition duration-200 hover:scale-110 ${
            todo.completed
              ? "text-yellow-500 hover:text-yellow-700"
              : "text-green-500 hover:text-green-700"
          }`}
        >
          {todo.completed ? <IncompleteIcon /> : <CompleteIcon />}
        </button>
        <button
          onClick={() => onEdit(todo)}
          className="p-1  text-blue-400 rounded hover:text-blue-600 hover:scale-110 transition duration-200"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:text-red-700 hover:scale-110 p-1 transition duration-200"
        >
          <RemoveIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
