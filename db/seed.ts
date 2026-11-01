import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../lib/generated/prisma/client'

import sampleData from './sample-data';

async function main() {
    const connectionString = process.env.DATABASE_URL ?? process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error('DATABASE_URL or DATABASE_URL must be set to seed the database.');
    }

    const adapter = new PrismaPg({ connectionString });
    const prisma = new PrismaClient({ adapter });

    try {
        await prisma.product.deleteMany();
        await prisma.account.deleteMany();
        await prisma.session.deleteMany();
        await prisma.verificationToken.deleteMany();
        await prisma.user.deleteMany();

        await prisma.product.createMany({ data: sampleData.products });
        await prisma.user.createMany({ data: sampleData.users });
    } finally {
        await prisma.$disconnect();
    }
    console.log('Database seeded successfully.');
}

main()