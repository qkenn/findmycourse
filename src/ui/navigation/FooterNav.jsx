'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function FooterNav() {
  const pathname = usePathname();
  const mainPath = pathname.split('/')[1];

  return (
    <nav
      className="hidden text-neutral-100 sm:block text-sm"
      aria-label="Desktop Navigation"
    >
      <ul className="flex flex-col gap-3">
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
