import { getCourses } from '@/lib/queries';
import { CourseCard } from '@/ui/explore/Cards';
import { TwoColGrid } from '@/ui/wrappers';

export default async function Page() {
  const courses = await getCourses();

  return (
    <TwoColGrid>
      {courses.map((course) => {
        return <CourseCard key={course.id} {...course} />;
      })}
    </TwoColGrid>
  );
}
