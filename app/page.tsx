import { getTodoListAction } from "@/actions/todosAction";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";

export default async function Home() {
  const todos = await getTodoListAction();
  return (
    <main className="conatiner">
      <div className="mx-auto flex flex-col justify-center space-y-4 w-full lg:w-3/4 p-12">
        <AddTodoForm />
        <TodosTable todos={todos} />
      </div>
    </main>
  );
}
