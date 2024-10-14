'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchForm() {
  const inputRef = useRef(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(e) {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    const params = new URLSearchParams(searchParams);

    if (inputValue) {
      params.set('query', inputValue);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row"
      autoComplete="off"
      onSubmit={handleSearch}
    >
      <label className="block">
        <span className="text-sm">Courses and programmes</span>
        <div className="relative">
          <input
            autoFocus
            type="text"
            placeholder="Keywords e.g subject/programme name/location"
            className="mt-1 block w-full rounded-sm border-[1px] border-neutral-600/50 px-5 py-2 pl-12 placeholder:text-neutral-400 sm:w-[32rem]"
            defaultValue={searchParams.get('query')?.toString()}
            ref={inputRef}
          />

          <Image
            alt="search icon"
            width={25}
            height={25}
            src="/search-icon.svg"
            className="absolute left-4 top-[1.3rem] -translate-y-1/2 transform"
          />
        </div>
      </label>

      <button className="block rounded-sm bg-neutral-950 px-10 py-2 text-white transition-colors focus:bg-neutral-700 focus:outline-none md:self-end md:px-8">
        Find
      </button>
    </form>
  );
}
