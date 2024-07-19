import React from "react";

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <label className="mr-2">Filter Todos:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded appearance-none row-start-1 col-start-1 bg-slate-50 "
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default TodoFilter;
