import ResultCard from './ResultCard';
import { getSearchedProgrammes } from '@/lib/queries';

export default async function ResultsContainer({ query }) {
  const programmes = await getSearchedProgrammes(query);

  return (
    <section className="md:col-span-8">
      <ul className="flex flex-col gap-10">
        {programmes.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}
      </ul>
    </section>
  );
}
