import { prisma } from "../lib/prisma.js";
import { igdb } from "../lib/igdb.js";

export async function getOrCreateGameById(gameId) {
    const existing = await prisma.game.findUnique({
        where: { id: gameId }
    });

    if (existing) return existing;

    const response = await igdb.post("/games", `
        fields id, name, cover.url;
        where id = ${gameId};
    `)

    const game = response.data[0];

    if (!game) throw new Error("Game not found in IGDB");

    return prisma.game.create({
        data: {
            id: game.id,
            name: game.name,
            coverUrl: game.cover
                ? game.cover.url.replace("t_thumb", "t_cover_big")
                : null
        }
    });
}