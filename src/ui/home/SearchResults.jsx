import { CenteredContainer } from '../wrappers';
import { FiltersWrapper } from '../filter/FiltersWrapper';
import ResultsContainer from './ResultsContainer';

export default function SearchResults({ query }) {
  return (
    <main>
      <CenteredContainer home={true}>
        <div className="mt-3 flex flex-col gap-10 md:grid md:grid-cols-12 md:gap-10">
          <FiltersWrapper />
          <ResultsContainer query={query} />
        </div>
      </CenteredContainer>
    </main>
  );
}
