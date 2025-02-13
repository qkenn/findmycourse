import { getSingleProgramme } from '@/lib/queries';

export default async function Page({ params: { id } }) {
  const programme = await getSingleProgramme(id);

  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="text-4xl font-semibold">{programme.name}</h1>
      <h3 className="mt-3">{programme.university?.name}</h3>

      <div className="mt-10">
        <div>Course - {programme.course?.name}</div>
        <div>Unicode - {programme.uniCode}</div>
        <div>Duration - {programme.duration}</div>
        <div>Medium - {programme.medium}</div>
      </div>
    </div>
  );
}
