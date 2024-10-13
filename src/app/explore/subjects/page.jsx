import { getSubjects } from '@/lib/queries';
import { SubjectCard } from '@/ui/explore/Cards';
import { TwoColGrid, CenteredContainer } from '@/ui/Wrappers';

export default async function Page() {
  const subjects = await getSubjects();

  return (
    <main>
      <CenteredContainer>
        <TwoColGrid>
          {subjects.map((subject) => {
            return <SubjectCard key={subject.id} {...subject} />;
          })}
        </TwoColGrid>
      </CenteredContainer>
    </main>
  );
}
