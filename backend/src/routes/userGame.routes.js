import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { upsertUserGame } from "../services/userGame.service.js";
import { getUserGames } from "../services/userGame.service.js";

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

export default router;