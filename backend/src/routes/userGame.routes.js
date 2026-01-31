import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { upsertUserGame } from "../services/userGame.service.js";

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

export default router;