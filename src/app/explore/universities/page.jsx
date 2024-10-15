import { getUnis } from '@/lib/queries';
import { UniversityCard } from '@/ui/explore/Cards';
import { TwoColGrid } from '@/ui/wrappers';

export default async function Page() {
  const universities = await getUnis();

  return (
    <TwoColGrid>
      {universities.map((uni) => {
        return <UniversityCard key={uni.id} {...uni} />;
      })}
    </TwoColGrid>
  );
}
