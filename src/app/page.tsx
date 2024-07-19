import { Todo } from "./components/todos/types";
import HomeClient from "./components/homeClient";

const Home = async () => {
  const response = await fetch(
    "https://669a4abc9ba098ed61ff176a.mockapi.io/todos",
    { cache: "no-cache" }
  );
  const initialTodos: Todo[] = await response.json();

  return <HomeClient initialTodos={initialTodos} />;
};

export default Home;
