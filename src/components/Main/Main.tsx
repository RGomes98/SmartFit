import type { BranchFilterSettings } from '../../types/types';
import { useBranchFilter } from '../../hooks/useBranchFilter';
import { BranchFilter } from './BranchFilter';
import { BranchLabels } from './BranchLabels';
import { BranchGrid } from './BranchGrid';
import { Heading } from './Heading';
import { useState } from 'react';

import styles from './Main.module.scss';

export const Main = () => {
  const [branchFilterSettings, setBranchFilterSettings] = useState<BranchFilterSettings>({
    branchCount: 0,
    timeOfDay: null,
    isClosedBranchFilterActive: false,
  });

  const { branchs, updateBranchFilter, resetBranchFilter } = useBranchFilter(
    branchFilterSettings,
    setBranchFilterSettings
  );

  return (
    <main className={styles.main}>
      <Heading />
      <BranchFilter
        resetBranchFilter={resetBranchFilter}
        updateBranchFilter={updateBranchFilter}
        branchFilterSettings={branchFilterSettings}
        setBranchFilterSettings={setBranchFilterSettings}
      />
      <BranchLabels />
      <BranchGrid branchs={branchs} />
    </main>
  );
};
