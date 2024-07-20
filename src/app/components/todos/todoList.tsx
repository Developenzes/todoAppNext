import React from "react";
import { Todo } from "./types";
import TodoItem from "./todoItem";

type TodoListProps = {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: string | undefined) => void;
  onToggleComplete: (id: string | undefined) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoList = ({
  todos,
  onEdit,
  onDelete,
  onToggleComplete,
  setOpenModal,
}: TodoListProps) => {
  return (
    <ul className="w-full max-w-md space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          setOpenModal={setOpenModal}
        />
      ))}
    </ul>
  );
};

export default TodoList;
