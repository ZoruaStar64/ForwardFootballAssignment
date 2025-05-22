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
        } finally {
            await this.prisma.$disconnect();
        }
    }

    async getPlayerInfo(playerName: any) {
        try {
            const player_info = await this.prisma.player_Info.findFirst({
                where: {
                    player: playerName
                }
            });
            console.log(player_info);
            return player_info;
        } catch (error) {
            console.error("Error Fetching player data:", error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }

    async createPlayer(data: any) {
        try {
            const player = await this.prisma.player_Info.create({
                data: {
                    player: data.player,
                    dribble_skills: data.dribble_skills,
                    length: parseInt(data.length),
                    weight: data.weight,
                    age: parseFloat(data.age),
                    ball_control: parseInt(data.ball_control),
                    passing_under_pressure: data.passing_under_pressure,
                    team: data.team,
                    position: data.position
                }
            });
            return player;
        } catch (error) {
            console.error("Error creating player:", error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }

    /**
     * Checks if the sent data row needs to be parsed or not.
     * If a row happens to be an Integer or Float, it needs to be parsed using parseInt or parseFloat.
     * If this function does not detect it being an Integer or Float. it will then return the original value (a string wether or not it's empty).
     * This function should only be used with database values that are allowed to be null/empty.
     * @param playerDataEntry 
     */
    checkForRequiredParsing(playerDataEntry: any): String | number | null {
        //Check if data is an Int.
        try {
            if (!parseInt(playerDataEntry)) {
                throw "Not an Int.";
            }
            return parseInt(playerDataEntry);
        } catch {
            console.log("data is not an Int.");
        }

        //Check if data is a Float.
        try {
            if (!parseFloat(playerDataEntry)) {
                throw "Not a Float.";
            }
            return parseFloat(playerDataEntry);
        } catch {
            console.log("data is not a Float value.");
        }
        //Check if string lenght is above 0.
        if (playerDataEntry.length > 0) {
            return playerDataEntry;
        }
        //default return value (not an int, float or non-empty string).
        return null;
    }

    async updatePlayer(data: any) {
        try {
            const player = await this.prisma.player_Info.update({
                where: {
                    player: data.player
                },
                data: {
                    dribble_skills: this.checkForRequiredParsing(data.dribble_skills),
                    length: this.checkForRequiredParsing(data.length),
                    weight: this.checkForRequiredParsing(data.weight),
                    age: this.checkForRequiredParsing(data.age),
                    ball_control: this.checkForRequiredParsing(data.ball_control),
                    passing_under_pressure: this.checkForRequiredParsing(data.passing_under_pressure),
                    team: this.checkForRequiredParsing(data.team),
                    position: this.checkForRequiredParsing(data.position)
                },
            });
            return player;
        } catch (error) {
            console.error("Error creating player:", error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }

    async deletePlayer(data: any) {
        try {
            const player_info = await this.prisma.player_Info.delete({
                where: {
                    player: data.player
                }
            });
            console.log(player_info);
            return player_info;
        } catch (error) {
            console.error("Error Fetching player data:", error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }
}

export const playerInfoService = new PlayerInfoService