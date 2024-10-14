import Features from '@/ui/home/Features';
import { Hero } from '@/ui/home/Hero';
import SearchResults from '@/ui/home/SearchResults';

export default async function Home({ searchParams }) {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;

  return (
    <>
      <Hero />
      <SearchResults query={query} />
      <Features />
    </>
  );
}
