import CompleteIcon from "../icons/completeIcon";
import EditIcon from "../icons/editIcon";
import IncompleteIcon from "../icons/incompleteIcon";
import RemoveIcon from "../icons/removeIcon";
import { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string | undefined) => void;
  onToggleComplete: (id: string | undefined) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoItem = ({
  todo,
  onEdit,
  onDelete,
  onToggleComplete,
  setOpenModal,
}: TodoItemProps) => {
  const onEditTodo = () => {
    onEdit(todo);
    setOpenModal(true);
  };

  return (
    <li
      className={`flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded shadow-sm gap-1 transition duration-200 ${
        todo.completed && "bg-opacity-60 dark:bg-opacity-60"
      }`}
    >
      <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </span>
      <div className="flex items-center gap-2">
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
          onClick={onEditTodo}
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
