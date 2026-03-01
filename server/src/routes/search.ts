import { Elysia } from "elysia";
import axios  from "axios";
import { SearchHistory } from "../models/SearchHistory.ts";

export const searchRoute = new Elysia()
  .get("/search", async ({ query }) => {
    const q = query.q as string;

    const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${process.env.YT_API_KEY}`;
    const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json`;
    const duckduckgoURL = `https://api.duckduckgo.com/?q=${q}&format=json`;

    const [ytRes, wikiRes, duckduckgoRes] = await Promise.all([
      axios.get(youtubeURL),
      axios.get(wikiURL),
      axios.get(duckduckgoURL)
    ]);

    await SearchHistory.create({ keyword: q });

    return {
      youtube: ytRes.data.items,
      wikipedia: wikiRes.data.query.search,
      duckduckgo: duckduckgoRes.data.RelatedTopics
    };
  })

  .get("/history", async () => {
    const history = await SearchHistory
      .find()
      .sort({ createdAt: -1 })
      .limit(20);

    return history;
  });