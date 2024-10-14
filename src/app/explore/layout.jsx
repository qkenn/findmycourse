import { CenteredContainer, TwoColGrid } from '@/ui/wrappers';

export default function ExploreLayout({ children }) {
  return (
    <main>
      <CenteredContainer>{children}</CenteredContainer>
    </main>
  );
}
