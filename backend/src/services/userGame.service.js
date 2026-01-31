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
        orderBy: { createdAt: "desc"}
    });
}

