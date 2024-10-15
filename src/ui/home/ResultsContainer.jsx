import ResultCard from './ResultCard';
import { getSearchedProgrammes, getSearchResultsCount } from '@/lib/queries';
import { SearchNotFound } from '../errors';
import { Pagination, PaginationDetails } from './pagination';

export default async function ResultsContainer({ query, page }) {
  const [programmes, count] = await Promise.all([
    getSearchedProgrammes(query, page),
    getSearchResultsCount(query),
  ]);

  return (
    <section>
      <PaginationDetails count={count} resultsLength={programmes.length} />

      <ul className="flex flex-col gap-10 mt-5">
        {programmes.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}

        {programmes.length < 1 && <SearchNotFound />}
      </ul>

      {programmes.length > 0 && <Pagination query={query} count={count} />}
    </section>
  );
}
