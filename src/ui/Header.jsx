'use client';

import { useState } from 'react';
import clsx from 'clsx';

import SiteLogo from '@/ui/SiteLogo';
import DesktopNav from '@/ui/navigation/DesktopNav';
import HamMenu from '@/ui/navigation/HamMenu';
import MobileNav from '@/ui/navigation/MobileNav';

export default function Header() {
  const [hamSelected, setHamSelected] = useState(false);

  return (
    <>
      <header
        className={clsx('z-30 bg-neutral-950 py-4', {
          'fixed left-0 right-0 top-0': hamSelected,
          relative: !hamSelected,
        })}
      >
        <div className="mx-auto flex max-w-main items-center justify-between px-5 xl:px-0">
          <SiteLogo />
          <DesktopNav />
          <HamMenu
            hamSelected={hamSelected}
            toggleHamMenu={() => setHamSelected((h) => !h)}
          />
        </div>
      </header>

      <MobileNav
        hamSelected={hamSelected}
        closeHamMenu={() => setHamSelected(false)}
      />
    </>
  );
}
