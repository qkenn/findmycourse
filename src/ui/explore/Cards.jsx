import Link from 'next/link';

const exploreCardProps = [
  {
    type: 'Subject',
    url: '/explore/subjects',
    desc: 'All courses offered by universities grouped into relevent subjects',
  },
  {
    type: 'Course',
    url: '/explore/courses',
    desc: 'List of courses offered by universities',
  },
  {
    type: 'Programme',
    url: '/explore/programmes',
    desc: 'List of all available degree programmes',
  },
  {
    type: 'University',
    url: '/explore/universities',
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

export function SubjectCard({ id, name, courses }) {
  return (
    <li className="self-start rounded-sm bg-white p-10">
      <Link href={`/explore/subjects/${id}`}>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>

          {courses.length > 0 && (
            <div className="mt-3 inline-block text-neutral-700 hover:underline">
              {courses.length === 1 ? '1 Course' : `${courses.length} Courses`}
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
