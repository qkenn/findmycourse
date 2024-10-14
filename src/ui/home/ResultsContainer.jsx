import ResultCard from './ResultCard';
import { getSearchedProgrammes } from '@/lib/queries';
import { SearchNotFound } from '../errors';

export default async function ResultsContainer({ query }) {
  const programmes = await getSearchedProgrammes(query);

  return (
    <section>
      <ul className="flex flex-col gap-10">
        {programmes.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}

        {programmes.length < 1 && <SearchNotFound />}
      </ul>
    </section>
  );
}
