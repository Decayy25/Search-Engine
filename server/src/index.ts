import { Elysia } from "elysia";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { searchRoute } from "./routes/search";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI!);

const port = process.env.PORT || 3000;

new Elysia()
  .use(searchRoute)
  .listen(port);

console.log(`\x1b[32m
  +==================================================+
  ✅ Elysia Server running!
  🌐 http://localhost:${port}
  📂 File: index.js
  +==================================================+
  `);