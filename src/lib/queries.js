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

export const getSingleCourse = (id) => {
  return prisma.course.findUnique({
    where: {
      id: +id,
    },
    include: {
      programmes: true,
    },
  });
};

export const getSingleProgramme = (id) => {
  return prisma.programme.findUnique({
    where: {
      id: +id,
    },
    include: {
      university: true,
      course: true,
    },
  });
};

export const getSingleSubject = (id) => {
  return prisma.subject.findUnique({
    where: {
      id: +id,
    },
    include: {
      courses: true,
    },
  });
};

export const getSingleUni = (id) => {
  return prisma.university.findUnique({
    where: {
      id: +id,
    },
    include: {
      programmes: true,
    },
  });
};
