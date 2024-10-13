import { CenteredContainer, TwoColGrid } from '@/ui/Wrappers';
import { ExploreCard } from '@/ui/explore/Cards';

export default function Page() {
  return (
    <main>
      <CenteredContainer>
        <TwoColGrid>
          <ExploreCard type="Subject" />
          <ExploreCard type="Course" />
          <ExploreCard type="Programme" />
          <ExploreCard type="University" />
        </TwoColGrid>
      </CenteredContainer>
    </main>
  );
}
