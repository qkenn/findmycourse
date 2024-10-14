import { getSingleSubject } from '@/lib/queries';
import Link from 'next/link';

export default async function Page({ params: { id } }) {
  const subject = await getSingleSubject(id);

  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{subject.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Courses</h3>
        {subject.courses?.length > 0 && (
          <ul className="mt-5">
            {subject.courses?.map((subject) => (
              <li key={subject.id}>
                <Link
                  href={`/explore/courses/${subject.id}`}
                  className="hover:underline"
                >
                  ✳ {subject.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
