import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // ─── Categories ────────────────────────────────────────────────────────────
  const categoryNames = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'categories.json'), 'utf-8')
  );

  console.log('Creating categories...');
  await prisma.category.createMany({
    data: (categoryNames as string[]).map((name: string) => ({ name })),
    skipDuplicates: true,
  });  console.log(`✓ ${categoryNames.length} categories ready`);

  // ─── Products ──────────────────────────────────────────────────────────────
  const productsDir = path.join(__dirname, 'data', 'products');
  const files = fs
    .readdirSync(productsDir)
    .filter((f) => f.endsWith('.json'))
    .sort();

  console.log(`Creating ${files.length} products...`);

  for (const file of files) {
    const data = JSON.parse(
      fs.readFileSync(path.join(productsDir, file), 'utf-8')
    );

    const {
      name,
      description,
      price,
      stock,
      category,
      mainImageUrl,
      images = [],
      specifications = [],
      additionalInfo = [],
      reviews = [],
    } = data;

    const existing = await prisma.product.findFirst({ where: { name } });
    if (existing) {
      process.stdout.write(`  ⏭  ${name} (skipped – already exists)\n`);
      continue;
    }

    await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        mainImageUrl,
        category: {
          connect: { name: category },
        },
        images: {
          create: (images as string[]).map((url: string, idx: number) => ({
            imageUrl: url,
            sortOrder: idx + 1,
          })),
        },
        specifications: {
          create: (specifications as { key: string; value: string }[]).map((s, idx: number) => ({
            specKey: s.key,
            specValue: s.value,
            sortOrder: idx + 1,
          })),
        },
        additionalInfo: {
          create: (additionalInfo as { key: string; value: string }[]).map((a, idx: number) => ({
            infoKey: a.key,
            infoValue: a.value,
            sortOrder: idx + 1,
          })),
        },
        reviews: {
          create: (reviews as { reviewerName: string; rating: number; title: string; reviewText: string; verifiedPurchase: boolean; reviewDate: string; helpfulCount: number }[]).map((r) => ({
            reviewerName: r.reviewerName,
            rating: r.rating,
            title: r.title,
            reviewText: r.reviewText,
            verifiedPurchase: r.verifiedPurchase,
            reviewDate: new Date(r.reviewDate),
            helpfulCount: r.helpfulCount,
          })),
        },
      },
    });

    process.stdout.write(`  ✓ ${name}\n`);
  }

  console.log('\n✅ Seed completed successfully!');
}

main()
  .catch((err) => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
