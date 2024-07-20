import Link from "next/link";

const Home = () => {
  return (
    <div className="h-[calc(100vh-88px-28px)] flex flex-col items-center justify-center p-4 gap-8 z-1 bg-gray-900 text-gray-100  ">
      <h1 className="text-xl font-bold">Choose your Todo List to start</h1>
      <Link
        href={"/todos1"}
        className=" bg-blue-500 hover:bg-blue-400 font-bold text-xl text-white py-4 px-12  rounded transition duration-200"
      >
        Todo List 1
      </Link>
      <Link
        href={"/todos2"}
        className=" bg-blue-500 hover:bg-blue-400 font-bold text-xl text-white py-4 px-12  rounded transition duration-200"
      >
        Todo List 2
      </Link>
    </div>
  );
};

export default Home;
