export function SearchResultsSkelton() {
  return (
    <section className="md:col-span-8">
      <ul className="flex flex-col gap-10">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="h-[200px] animate-pulse rounded-sm bg-white"
            ></div>
          ))}
      </ul>
    </section>
  );
}

export function ExploreSkelton() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-12">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="h-[150px] animate-pulse rounded-sm bg-white"
          ></div>
        ))}
    </div>
  );
}

export function EntityDetailsSkelton() {
  return (
    <div className="mt-5 h-[72dvh] animate-pulse rounded-sm bg-white"></div>
  );
}
