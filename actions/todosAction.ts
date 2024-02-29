"use server";

import { ITodo } from "@/interfaces";
import { TodoFormValues } from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async (userId: string | null) => {
  try {
    return await prisma.todo.findMany({
      where: {
        user_id: userId as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const createodoAction = async ({
  title,
  body,
  completed,
  userId,
}: TodoFormValues & { userId: string | null }) => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        user_id: userId as string,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  try {
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        body,
        completed,
      },
    });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
