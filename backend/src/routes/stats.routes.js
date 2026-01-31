import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { getUserStats } from "../services/userGame.service.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const stats = await getUserStats(req.user.id);
  res.json(stats);
});

export default router;
