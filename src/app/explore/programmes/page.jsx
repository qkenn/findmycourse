import { getProgrammes } from '@/lib/queries';
import { ProgrammeCard } from '@/ui/explore/Cards';
import { TwoColGrid, CenteredContainer } from '@/ui/Wrappers';

export default async function Page() {
  const programmes = await getProgrammes();

  return (
    <main>
      <CenteredContainer>
        <TwoColGrid>
          {programmes.map((programme) => {
            return <ProgrammeCard key={programme.id} {...programme} />;
          })}
        </TwoColGrid>
      </CenteredContainer>
    </main>
  );
}
