import { prisma } from "../lib/prisma.js";

export async function syncUser({ id, email }) {
  return prisma.user.upsert({
    where: { id },
    update: { email },
    create: { id, email }
  });
}
