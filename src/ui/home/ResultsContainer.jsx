import ResultCard from './ResultCard';
import { getSearchedProgrammes, getSearchResultsCount } from '@/lib/queries';
import { SearchNotFound } from '../errors';
import Link from 'next/link';
import Pagination from './pagination';

export default async function ResultsContainer({ query, page }) {
  const [programmes, count] = await Promise.all([
    getSearchedProgrammes(query, page),
    getSearchResultsCount(query),
  ]);

  return (
    <section>
      <ul className="flex flex-col gap-10">
        {programmes.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}

        {programmes.length < 1 && <SearchNotFound />}
      </ul>

      {programmes.length > 0 && <Pagination query={query} count={count} />}
    </section>
  );
}
