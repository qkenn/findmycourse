import { CenteredContainer } from '../wrappers';
import { FiltersWrapper } from '../filter/FiltersWrapper';
import ResultsContainer from './ResultsContainer';
import { Suspense } from 'react';
import { SearchResultsSkelton } from '../skeltons';

export default function SearchResults({ query }) {
  return (
    <main>
      <CenteredContainer home={true}>
        <div className="mt-3 flex flex-col gap-10">
          <Suspense key={query} fallback={<SearchResultsSkelton />}>
            <ResultsContainer query={query} />
          </Suspense>
        </div>
      </CenteredContainer>
    </main>
  );
}
