import Link from 'next/link';
import Image from 'next/image';

export default function SiteLogo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2">
        <Image src="/logo.svg" alt="website logo" width={40} height={40} />
        <h3 className="text-white font-bold">FindMyCourse</h3>
      </div>
    </Link>
  );
}
