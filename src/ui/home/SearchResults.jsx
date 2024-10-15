import { Suspense } from 'react';
import { SearchResultsSkelton } from '../skeltons';
import ResultsContainer from './ResultsContainer';

export default function SearchResults({ query, page }) {
  return (
    <Suspense key={query + page} fallback={<SearchResultsSkelton />}>
      <ResultsContainer query={query} page={page} />
    </Suspense>
  );
}
