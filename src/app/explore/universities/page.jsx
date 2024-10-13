import { getUnis } from '@/lib/queries';
import { UniversityCard } from '@/ui/explore/Cards';
import { TwoColGrid, CenteredContainer } from '@/ui/Wrappers';

export default async function Page() {
  const universities = await getUnis();

  return (
    <main>
      <CenteredContainer>
        <TwoColGrid>
          {universities.map((uni) => {
            return <UniversityCard key={uni.id} {...uni} />;
          })}
        </TwoColGrid>
      </CenteredContainer>
    </main>
  );
}
