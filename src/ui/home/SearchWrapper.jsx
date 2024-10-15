'use client';

import { Hero } from './Hero';
import { useState } from 'react';
import { CenteredContainer } from '../wrappers';

export default function SearchWrapper({ results }) {
  const [initiated, setInitated] = useState(false);

  return (
    <>
      <Hero
        handleInitalize={() => {
          if (!initiated) {
            setInitated(true);
          }
        }}
      />
      <main>
        <CenteredContainer home={true}>
          <div className="mt-3 flex flex-col gap-10">
            {initiated && results}
          </div>
        </CenteredContainer>
      </main>
    </>
  );
}
