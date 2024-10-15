import { CenteredContainer } from '../wrappers';
import { Suspense } from 'react';
import { SearchResultsSkelton } from '../skeltons';
import ResultsContainer from './ResultsContainer';

export default function SearchResults({ query }) {
  return (
    <Suspense key={query} fallback={<SearchResultsSkelton />}>
      <ResultsContainer query={query} />
    </Suspense>
  );
}
