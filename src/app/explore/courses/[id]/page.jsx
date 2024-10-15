import { getSingleCourse } from '@/lib/queries';
import Link from 'next/link';

export default async function Page({ params: { id } }) {
  const course = await getSingleCourse(id);

  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{course.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Programmes</h3>
        {course.programmes.length > 0 && (
          <ul className="mt-5">
            {course.programmes.map((programme) => (
              <li key={programme.id}>
                <Link
                  href={`/explore/programmes/${programme.id}`}
                  className="hover:underline"
                >
                  ✳ {programme.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
