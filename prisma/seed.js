import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// data imports
import subjects from '../src/lib/placeholder-data/subjects.json' assert { type: 'json' };
import universities from '../src/lib/placeholder-data/universities.json' assert { type: 'json' };
import courses from '../src/lib/placeholder-data/courses.json' assert { type: 'json' };
import programmes from '../src/lib/placeholder-data/programmes.json' assert { type: 'json' };

// create db entries utility
async function createEntries(model, data) {
  const created = await model.createManyAndReturn({
    data,
    skipDuplicates: true,
  });

  console.log(created);
}

// delete all db entries utility
async function deleteAllEntries() {
  await prisma.$transaction([
    prisma.programme.deleteMany(),
    prisma.university.deleteMany(),
    prisma.course.deleteMany(),
    prisma.subject.deleteMany(),
  ]);
}

async function main() {
  await deleteAllEntries();

  await createEntries(prisma.subject, subjects);
  await createEntries(prisma.university, universities);
  await createEntries(prisma.course, courses);
  await createEntries(prisma.programme, programmes);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
