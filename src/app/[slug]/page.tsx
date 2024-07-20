import TodoListDetailClient from "@/app/components/todoListDetailClient";
import { Todo } from "@/app/components/todos/types";

const TodoListDetail = async ({ params }: { params: { slug: string } }) => {
  const response = await fetch(
    `https://669a4abc9ba098ed61ff176a.mockapi.io/${params.slug}`,
    { cache: "no-cache" }
  );
  const initialTodos: Todo[] = await response.json();

  return (
    <TodoListDetailClient initialTodos={initialTodos} slug={params.slug} />
  );
};

export default TodoListDetail;
