import express, { Router } from "express";
import { playerInfoController } from "./playerInfo.controller";
const bodyParser = require('body-parser');
const router: Router = express.Router();

router.use(bodyParser.urlencoded());
router.get("/", playerInfoController.getAllPlayerInfo);
router.get("/{:player}", playerInfoController.getPlayerInfo);
router.post("/create", playerInfoController.createPlayer);
router.put("/update", playerInfoController.updatePlayer);
router.post("/delete", playerInfoController.deletePlayer);

export default router;