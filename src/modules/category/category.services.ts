import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (category: Category): Promise<Category | null> => {
  const result = await prisma.category.create({
    data: category,
  });

  return result;
};

export const CategoryService = {
  createCategory,
};
