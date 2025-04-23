import express from "express";
import playerInfoRouter from "./player_info/playerInfo.route";

const registerRoutes = (app: express.Application) => {
  app.use("/playerInfo", playerInfoRouter);
};
export default registerRoutes