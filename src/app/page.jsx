import Features from '@/ui/home/Features';
import SearchResults from '@/ui/home/SearchResults';
import { CenteredContainer } from '@/ui/wrappers';
import { Hero } from '@/ui/home/Hero';

export default function Home({ searchParams }) {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;

  return (
    <>
      <Hero />

      {query !== '' && (
        <main>
          <CenteredContainer>
            <div className="mt-3 flex flex-col gap-10">
              <SearchResults query={query} page={currentPage} />
            </div>
          </CenteredContainer>
        </main>
      )}
      <Features />
    </>
  );
}
