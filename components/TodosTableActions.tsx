"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { ITodo } from "@/interfaces";
import { deleteTodoAction } from "@/actions/todosAction";
import EditTodoForm from "./EditTodoForm";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction(todo.id);
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
