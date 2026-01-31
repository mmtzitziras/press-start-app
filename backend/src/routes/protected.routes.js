import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { syncUser } from "../services/user.services.js";

const router = Router();

router.get("/me", requireAuth, async (req, res) => {
  const user = await syncUser(req.user);
  res.json(user);
});

export default router;