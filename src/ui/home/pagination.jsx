'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function Pagination({ query, count }) {
  const pathname = usePathname();
  const pagesCount = (count || 0) <= 8 ? 1 : Math.ceil((count || 0) / 8);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentPage = params.get('page');

  return (
    <div className="flex justify-center gap-3 mt-10">
      {[...Array(pagesCount)].map((_, index) => {
        const pageNumber = index + 1;

        return (
          <Link
            href={`${pathname}?query=${query}&page=${pageNumber}`}
            key={index}
            className={clsx({
              'inline-block rounded-sm bg-neutral-950 px-2 py-0.5 text-white':
                currentPage == pageNumber,
              'hover:underline': currentPage != pageNumber,
            })}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
