import { PrismaClient } from "@prisma/client";

class PlayerInfoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async getAllPlayerInfo() {
        try {
            const player_info = await this.prisma.player_info.findMany({
                select: {
                    player: true,
                    dribble_skills: true,
                    length: true,
                    width: true,
                    age: true,
                    ball_control: true,
                    passing_under_pressure: true,
                    team: true,
                    position: true,
                },
            });
            return player_info;
        } catch (error) {
            console.error("Error Fetching player data:", error);
            throw error;
        }
    }

    async createPlayer(data: any) {
        try {
            const player = await this.prisma.player_info.create({
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