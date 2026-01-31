import axios from "axios";
import "dotenv/config";

export const igdb = axios.create({
  baseURL: "https://api.igdb.com/v4",
  headers: {
    "Client-ID": process.env.IGDB_CLIENT_ID,
    Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`
  }
});
