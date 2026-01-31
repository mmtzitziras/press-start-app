import express from "express";
import cors from "cors";
import protectedRoutes from "./routes/protected.routes.js";
import userGameRoutes from "./routes/userGame.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));
app.use("/api/protected", protectedRoutes);
app.use("/api/user-games", userGameRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API on :${PORT}`));