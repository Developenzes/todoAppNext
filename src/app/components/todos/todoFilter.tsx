import ArrowDown from "../icons/arrowDown";

type TodoFilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="col-span-1 relative">
      <div className="absolute right-2 top-3.5">
        <ArrowDown width={12} height={12} />
      </div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded row-start-1 col-start-1 bg-slate-50 h-10 cursor-pointer transition duration-200 focus:outline-none focus:border-sky-500 focus:ring-1 appearance-none"
      >
        <option value="all">Show All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default TodoFilter;
