import { PrismaClient } from "@prisma/client";
import app from "./app";
const PORT = process.env.PORT || 5000;

const prisma = new PrismaClient();

function main() {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
  });
}

main()