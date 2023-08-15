import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

const getPost = async (id: number) => {
  const result = await prisma.$queryRaw`SELECT * FROM posts WHERE id = ${id}`;

  return result;
};

const createPost = async (post: Post): Promise<Post | null> => {
  const result = await prisma.post.create({
    data: post,
    include: { author: true, category: true },
  });

  return result;
};

const updatePost = async (id: number, post: Post): Promise<Post | null> => {
  const result = await prisma.post.update({
    where: { id },
    data: post,
  });

  return result;
};

const deletePost = async (id: number): Promise<Post | null> => {
  const result = await prisma.post.delete({
    where: { id },
  });

  return result;
};

const learnAggNgrop = async () => {
  // const result = await prisma.post.aggregate({
  //   _avg: {
  //     authorId: true,
  //   },
  //   _sum: {
  //     authorId: true,
  //     categoryId: true,
  //   },
  // });

  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });

  return result;
};

export const PostService = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  learnAggNgrop,
};
