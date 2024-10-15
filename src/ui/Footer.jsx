import Link from 'next/link';
import SiteLogo from './SiteLogo';
import FooterNav from './navigation/FooterNav';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-5 py-8  text-white">
      <div className="flex-col md:flex-row mx-auto flex max-w-main gap-12  px-5 xl:px-0 md:items-center md:justify-between">
        <div className="md:w-2/5">
          <SiteLogo />
          <p className="text-neutral-300 text-sm mt-3">
            Find and explore degrere programmes offered by Sri Lankan state
            universities and institutions.
          </p>
        </div>

        <Link
          href="https://github.com/qkenn/findmycourse"
          target="_blank"
          className="text-sm hidden md:block"
        >
          source code ↗
        </Link>

        <FooterNav display="md" />

        <div className="md:hidden flex justify-between">
          <Link
            href="https://github.com/qkenn/findmycourse"
            target="_blank"
            className="text-sm"
          >
            source code ↗
          </Link>

          <FooterNav display="sm" />
        </div>
      </div>
    </footer>
  );
}
