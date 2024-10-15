import { getSingleUni } from '@/lib/queries';
import Link from 'next/link';

export default async function Page({ params: { id } }) {
  const uni = await getSingleUni(id);

  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{uni.name}</h1>

      <div className="mt-10">
        <h3 className="text-2xl">Programmes</h3>
        {uni.programmes?.length > 0 && (
          <ul className="mt-5">
            {uni.programmes?.map((programme) => (
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
