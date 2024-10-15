import Features from '@/ui/home/Features';
import SearchWrapper from '@/ui/home/SearchWrapper';
import SearchResults from '@/ui/home/SearchResults';

export default function Home({ searchParams }) {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;

  console.log(query);

  return (
    <>
      <SearchWrapper results={<SearchResults query={query} />} />
      <Features />
    </>
  );
}
