import FilterSelectBtn from './FilterSelectBtn';

export function FiltersWrapper() {
  return (
    <section className="rounded-sm bg-white p-10 md:col-span-4 md:self-start md:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Filters</h3>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <FilterSelectBtn />
        <FilterSelectBtn />
      </div>
    </section>
  );
}
