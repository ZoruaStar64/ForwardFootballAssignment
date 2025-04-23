import { Request, Response } from "express";
import { playerInfoService } from "./playerInfo.service";

class PlayerInfoController {
    constructor() {}

    async getAllPlayerInfo(req: Request, res: Response) {
        try {
            const result = await playerInfoService.getAllPlayerInfo();
            res.status(200).send(result);
        } catch (error) {
            console.error("Error fetching player data:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async createPlayer(req: Request, res: Response) {
        try {
            const result = await playerInfoService.createPlayer(req.body);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error fetching player data:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

export const playerInfoController = new PlayerInfoController();