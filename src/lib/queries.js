import prisma from '@/lib/prisma';

export const getSubjects = () => {
  return prisma.subject.findMany({
    include: {
      courses: true,
    },
  });
};

export const getCourses = () => {
  return prisma.course.findMany({
    include: {
      programmes: true,
    },
  });
};

export const getUnis = () => {
  return prisma.university.findMany({
    include: {
      programmes: true,
    },
  });
};

export const getProgrammes = () => {
  return prisma.programme.findMany({
    include: {
      university: true,
    },
  });
};
