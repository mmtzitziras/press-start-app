import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { upsertUserGame } from "../services/userGame.service.js";
import { getUserGames } from "../services/userGame.service.js";
import { updateUserGameReview } from "../services/userGame.service.js";
import { getOrCreateGameById } from "../services/game.service.js";
import { deleteUserGame } from "../services/userGame.service.js";


const router = Router();
const VALID_STATUSES = ["PLAYING", "PLAYED", "WISHLIST"];

router.post("/", requireAuth, async (req, res) => {
    const {gameId, status} = req.body;

    if (!gameId || !status){
        return res.status(400).json({ error: "gameId and status are required" });
    }

    if (!VALID_STATUSES.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }
    await getOrCreateGameById(gameId); // ensure Game exists (cache-first)
    const userGame = await upsertUserGame({
        userId: req.user.id,
        gameId,
        status
    });
    res.json(userGame);
})

router.get("/", requireAuth, async(req, res) => {
    const {status} = req.query;

    if (status && !VALID_STATUSES.includes(status)){
        return res.status(400).json({ error: "Invalid status" });
    }

    const games = await getUserGames({
        userId: req.user.id,
        status
    });

    res.json(games);
})

router.patch("/", requireAuth, async(req, res) =>{
    const {gameId, score, review } = req.body;

    if (!gameId){
        return res.status(400).json({ error: "gameId is required" });
    }

    if (score !== undefined){
         if (
                typeof score !== "number" ||
                score < 1 ||
                score > 10
            ) {
                return res.status(400).json({ error: "Score must be between 1 and 10" });
            }
    }

    const updated = await updateUserGameReview({
        userId: req.user.id,
        gameId,
        score,
        review
    })

    res.json(updated);
})

router.delete("/:gameId", requireAuth, async (req, res) => {
  const gameId = Number(req.params.gameId);

  if (!gameId) {
    return res.status(400).json({ error: "Invalid gameId" });
  }

  await deleteUserGame({
    userId: req.user.id,
    gameId
  });

  res.status(204).end();
});

export default router;