import Link from 'next/link';

const exploreCardProps = [
  {
    type: 'Subject',
    url: '/explore/subjects',
    desc: 'All courses offered by universities grouped into relevent subjects',
  },
  {
    type: 'Course',
    url: 'explore/courses',
    desc: 'List of courses offered by universities',
  },
  {
    type: 'Programme',
    url: 'explore/programmes',
    desc: 'List of all available degree programmes',
  },
  {
    type: 'University',
    url: 'explore/universities',
    desc: 'List of all state universites and institutes',
  },
];

export function ExploreCard({ type }) {
  const card = exploreCardProps.find((c) => c.type === type);

  return (
    <Link href={card.url} className="rounded-sm bg-white p-8">
      <h2 className="text-2xl font-semibold">{card.type}</h2>
      <p className="mt-3 text-slate-700">{card.desc}</p>
    </Link>
  );
}
