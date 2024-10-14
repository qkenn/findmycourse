import { CenteredContainer, TwoColGrid } from '@/ui/Wrappers';

export default function ExploreLayout({ children }) {
  return (
    <main>
      <CenteredContainer>{children}</CenteredContainer>
    </main>
  );
}
