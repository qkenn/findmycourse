const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const subjects = require('../src/lib/placeholder-data/subjects.json');
const universities = require('../src/lib/placeholder-data/universities.json');
const courses = require('../src/lib/placeholder-data/courses.json');
const programmes = require('../src/lib/placeholder-data/programmes.json');
async function main() {
  // some models depends on other models
  // hence, Promise.all() models seperately

  await Promise.all([
    subjects.map((subject) => {
      return prisma.subject.upsert({
        where: { id: subject.id },
        update: {},
        create: {
          name: subject.name,
        },
      });
    }),
  ]);

  await Promise.all([
    universities.map((university) => {
      return prisma.university.upsert({
        where: { id: university.id },
        update: {},
        create: {
          name: university.name,
        },
      });
    }),
  ]);

  await Promise.all([
    courses.map((course) => {
      return prisma.course.upsert({
        where: { id: course.id },
        update: {},
        create: {
          courseCode: course.courseCode,
          intake: course.intake,
          name: course.name,
          constraints: course.constraints || {},
          subjectId: course.subjectId,
        },
      });
    }),
  ]);

  await Promise.all([
    programmes.map((programme) => {
      return prisma.programme.upsert({
        where: { id: programme.id },
        update: {},
        create: {
          name: programme.name,
          universityId: programme.universityId,
          courseId: programme.courseId,
          keywords: programme.keywords || [],
          uniCode: programme.uniCode,
        },
      });
    }),
  ]);
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
