import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "prisma@prisma.com",
      name: "prisma",
      address: {
        street: "STREET",
        city: "CITY",
        state: "STATE",
        zip: "ZIP",
      },
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
