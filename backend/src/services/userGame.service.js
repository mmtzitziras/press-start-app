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