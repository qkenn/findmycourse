import { getProgrammes } from '@/lib/queries';
import { ProgrammeCard } from '@/ui/explore/Cards';
import { TwoColGrid } from '@/ui/Wrappers';

export default async function Page() {
  const programmes = await getProgrammes();

  return (
    <TwoColGrid>
      {programmes.map((programme) => {
        return <ProgrammeCard key={programme.id} {...programme} />;
      })}
    </TwoColGrid>
  );
}
