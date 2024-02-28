import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: "ahmedd@ahmedd.com",
  //     name: "prisma",
  //     address: {
  //       street: "STREET",
  //       city: "CITY",
  //       state: "STATE",
  //       zip: "ZIP",
  //     },
  //   },
  // });
  await prisma.todo.create({
    data: {
      title: "Learn Prisma ORM",
    },
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
