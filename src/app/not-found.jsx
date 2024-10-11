import Image from 'next/image';
import { CenteredContainer } from '@/ui/Wrappers';

export default function NotFound() {
  return (
    <main>
      <CenteredContainer>
        <div className="mx-auto max-w-56">
          <Image
            src="/page-not-found.svg"
            alt="not found"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-xl md:text-3xl">404 | Page not found</h3>
          <p className="mt-1">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </CenteredContainer>
    </main>
  );
}
