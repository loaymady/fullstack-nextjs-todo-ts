import { getUserTodoListAction } from "@/actions/todosAction";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  const todos = await getUserTodoListAction(userId);

  return (
    <main className="conatiner">
      <div className="mx-auto flex flex-col justify-center space-y-4 w-full lg:w-3/4 p-12">
        <AddTodoForm userId={userId} />
        <TodosTable todos={todos} />
      </div>
    </main>
  );
}
