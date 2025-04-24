import { PrismaClient } from "@prisma/client";

class PlayerInfoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async getAllPlayerInfo() {
        try {
            const player_info = await this.prisma.player_Info.findMany();
            console.log(player_info);
            return player_info;
        } catch (error) {
            console.error("Error Fetching player data:", error);
            throw error;
        }
    }

    async createPlayer(data: any) {
        try {
            const player = await this.prisma.player_Info.create({
                data,
            });
            return player;
        } catch (error) {
            console.error("Error creating player:", error);
            throw error;
        }
    }
}

export const playerInfoService = new PlayerInfoService