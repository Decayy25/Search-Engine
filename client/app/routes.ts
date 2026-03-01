import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("/search", "routes/search.tsx"),
  route("/history", "routes/history.tsx"),
];
