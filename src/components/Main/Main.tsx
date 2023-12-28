import { BranchFilter } from './BranchFilter';
import { BranchLabels } from './BranchLabels';
import { Heading } from './Heading';

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Heading />
      <BranchFilter />
      <BranchLabels />
    </main>
  );
};
