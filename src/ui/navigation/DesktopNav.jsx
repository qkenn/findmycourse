'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function DesktopNav() {
  const pathname = usePathname();
  const mainPath = pathname.split('/')[1];

  return (
    <nav
      className="hidden text-neutral-100 sm:block"
      aria-label="Desktop Navigation"
    >
      <ul className="flex gap-x-20">
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
