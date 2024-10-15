import Image from 'next/image';

export function SearchNotFound() {
  return (
    <>
      <div className="mx-auto max-w-56">
        <Image width={300} height={300} alt="not found" src="/not-found.svg" />
      </div>
      <h4 className="mt-3 text-center">
        Your search criteria didn&apos;t match any courses or programmes.
      </h4>
    </>
  );
}
