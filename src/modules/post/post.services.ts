import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (post: Post): Promise<Post | null> => {
  const result = await prisma.post.create({
    data: post,
    include: { author: true, category: true },
  });

  return result;
};

const getPosts = async (options: any) /* : Promise<Post[] | null>  */ => {
  let { sortBy, sortOrder, page, limit, searchTerm } = options;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const posts = await tx.post.findMany({
      include: { author: true, category: true },
      where: {
        OR: [
          { title: { contains: searchTerm, mode: "insensitive" } },
          { author: { email: { contains: searchTerm, mode: "insensitive" } } },
        ],
      },
      orderBy:
        sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "asc" },
      skip: limit * (page - 1),
      take: limit,
    });

    const total = await tx.user.count();

    return { posts, total };
  });
};

export const PostService = {
  createPost,
  getPosts,
};
