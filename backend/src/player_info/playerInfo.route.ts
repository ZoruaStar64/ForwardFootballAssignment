import express, { Router } from "express";
import { playerInfoController } from "./playerInfo.controller";
const router: Router = express.Router();

router.get("/", playerInfoController.getAllPlayerInfo);
router.post("/", playerInfoController.createPlayer);

export default router;