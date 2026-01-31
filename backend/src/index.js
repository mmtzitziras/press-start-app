import express from "express";
import cors from "cors";
import protectedRoutes from "./routes/protected.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API on :${PORT}`));