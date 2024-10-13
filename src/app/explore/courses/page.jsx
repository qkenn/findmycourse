import { CenteredContainer, TwoColGrid } from '@/ui/Wrappers';
import { CourseCard } from '@/ui/explore/Cards';
import { getCourses } from '@/lib/queries';

export default async function Page() {
  const courses = await getCourses();

  return (
    <main>
      <CenteredContainer>
        <TwoColGrid>
          {courses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </TwoColGrid>
      </CenteredContainer>
    </main>
  );
}
