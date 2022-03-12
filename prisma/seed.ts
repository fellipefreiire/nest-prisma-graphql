import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  console.log('Seeding...');

  const user = await prisma.user.create({
    data: {
      email: 'rcabral@rcabral.com',
      password: process.env.SEED_PASSWORD, // secret42
    },
  });

  console.log({ user });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
