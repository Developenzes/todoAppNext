import React from "react";

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="col-span-1">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded appearance-none row-start-1 col-start-1 bg-slate-50 h-10 "
      >
        <option value="all">Show All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default TodoFilter;
