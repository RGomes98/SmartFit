import { Location } from '../../types/types';
import { Branch } from './Branch';

import styles from './BranchGrid.module.scss';

export const BranchGrid = ({ branchs }: { branchs: Location[] }) => {
  const orderByBranchStatus = (a: Location, b: Location) => Number(b.opened) - Number(a.opened);

  return (
    <div className={`${branchs.length ? styles.container : styles.empty}`}>
      {branchs.sort(orderByBranchStatus).map((location) => (
        <Branch key={location.id} location={location} />
      ))}
      {!branchs.length && <span className={styles.message}>Nenhuma unidade encontrada.</span>}
    </div>
  );
};
