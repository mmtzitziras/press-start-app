import "dotenv/config";
import { jwtVerify, createRemoteJWKSet } from "jose";
import { syncUser } from "../services/user.service.js";

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.SUPABASE_URL}/auth/v1/.well-known/jwks.json`)
);

export async function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: `${process.env.SUPABASE_URL}/auth/v1`,
      audience: "authenticated"
    });

    req.user = {
  id: payload.sub,
  email: payload.email
};

  await syncUser({
    id: req.user.id,
    email: req.user.email
  });

  next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}
