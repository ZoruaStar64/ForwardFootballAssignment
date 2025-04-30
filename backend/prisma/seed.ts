import { PrismaClient } from '@prisma/client';
import * as seedData from './data.json';

const prisma = new PrismaClient();

async function main() {
  // Delete all existing records
  await prisma.player_Info.deleteMany();

  // Create players
  for (const playerData of seedData.player_Data) {
    await prisma.player_Info.create({
        data: playerData,
    });
  }

  console.log('Database has been seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });