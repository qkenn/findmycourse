'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function FooterNav({ display }) {
  const pathname = usePathname();
  const mainPath = pathname.split('/')[1];

  return (
    <nav
      className={clsx('text-neutral-100 text-sm', {
        'block md:hidden': display === 'sm',
        'hidden md:block': display === 'md',
      })}
    >
      <ul className="flex md:flex-col flex-row gap-5 md:gap-3">
        <Link href="/" className={clsx({ 'font-bold': mainPath === '' })}>
          Home
        </Link>
        <Link
          href="/explore"
          className={clsx({ 'font-bold': mainPath === 'explore' })}
        >
          Explore
        </Link>
      </ul>
    </nav>
  );
}
