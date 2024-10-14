import { getSubjects } from '@/lib/queries';
import { SubjectCard } from '@/ui/explore/Cards';
import { TwoColGrid } from '@/ui/Wrappers';

export default async function Page() {
  const subjects = await getSubjects();

  return (
    <TwoColGrid>
      {subjects.map((subject) => {
        return <SubjectCard key={subject.id} {...subject} />;
      })}
    </TwoColGrid>
  );
}
