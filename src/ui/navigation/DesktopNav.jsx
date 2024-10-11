import Link from 'next/link';

export default function DesktopNav() {
  return (
    <nav
      className="hidden text-neutral-100 sm:block"
      aria-label="Desktop Navigation"
    >
      <ul className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
      </ul>
    </nav>
  );
}
