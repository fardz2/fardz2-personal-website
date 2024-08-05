import { PrismaClient } from '@prisma/client';


const db = new PrismaClient();


if (process.env.NODE_ENV !== 'production') {
  (global as any).prisma = db;
}

export default db;
