import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);

//   const user = await prisma.user.create({
//     data: {
//       email: "alice3@prisma.io",
//       name: "Alice",
//       age: 22,
//       phoneNumber: "017037",
//     },
//   });
//   console.log(user);
}

main();
