import {prisma} from "../lib/prisma.js"

export async function upsertUserGame({userId, gameId, status}) {
    return prisma.userGame.upsert({
        where: {
            userId_gameId: {userId, gameId}
        },

        update: {status},
        create: {
            userId,
            gameId,
            status
        }
    });
}

export async function getUserGames({userId, status}){
    return prisma.userGame.findMany({
        where: {
            userId,
            ...(status ? {status} : {})
        },
        include: {
            game: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
        orderBy: { createdAt: "desc"}
    });
}


export async function updateUserGameReview({
    userId,
    gameId,
    score,
    review
}){
    return prisma.userGame.update({
        where: {userId_gameId : {userId, gameId}},
        data: {
            ...(score !== undefined ? { score } : {}),
            ...(review !== undefined ? { review } : {})
        }
    })
}

export async function getUserStats(userId) {
  const [counts, playtimeAgg] = await Promise.all([
    prisma.userGame.groupBy({
      by: ["status"],
      where: { userId },
      _count: { _all: true }
    }),
    prisma.userGame.aggregate({
      where: { userId },
      _sum: { playtime: true }
    })
  ]);

  const statusCounts = {
    PLAYING: 0,
    PLAYED: 0,
    WISHLIST: 0
  };

  for (const row of counts) {
    statusCounts[row.status] = row._count._all;
  }

  return {
    counts: statusCounts,
    totalPlaytime: playtimeAgg._sum.playtime ?? 0
  };
}