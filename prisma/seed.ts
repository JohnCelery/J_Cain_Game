import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `user${i + 1}@demo.com`,
          password: 'password',
          name: `User ${i + 1}`,
        },
      })
    )
  );
  const game = await prisma.game.create({
    data: {
      hostId: users[0].id,
      players: { create: users.map((u) => ({ userId: u.id })) },
    },
  });
  await prisma.round.create({
    data: {
      gameId: game.id,
      storytellerId: users[0].id,
      statement: {
        create: { content: 'I once ate a whole lemon', truth: false },
      },
    },
  });
  console.log('Seeded DB with demo game:', game.id);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
