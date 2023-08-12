import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (): Promise<Partial<User>[] | null> => {
  const result = await prisma.user.findMany({
    select: { email: true },
  });

  return result;
};

const getUser = async (id: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: { id },
    include: { profile: true }
  });

  return result;
};

const createUser = async (user: User): Promise<User | null> => {
  const result = await prisma.user.create({
    data: user,
  });

  return result;
};

const profile = async (profile: Profile): Promise<Profile | null> => {
  const isExist = await prisma.profile.findUnique({
    where: { userId: profile.userId },
  });

  let result;
  if (isExist) {
    result = await prisma.profile.update({
      where: { userId: profile.userId },
      data: profile,
    });
  } else {
    result = await prisma.profile.create({
      data: profile,
    });
  }

  return result;
};

export const UserService = {
  createUser,
  profile,
  getUsers,
  getUser,
};
