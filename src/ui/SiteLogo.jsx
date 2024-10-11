import Link from 'next/link';
import Image from 'next/image';

export default function SiteLogo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2">
        <div className="h-[30px] w-[30px]">
          <Image
            src="/site-logo.svg"
            alt="website logo"
            width={30}
            height={30}
          />
        </div>

        <h4 className="pt-1 text-white font-mono">unicourse</h4>
      </div>
    </Link>
  );
}
