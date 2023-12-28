import { Label } from './Label';

import styles from './BranchLabels.module.scss';

export const BranchLabels = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.labelWrapper}>
        <span className={styles.labelHeading}>Máscara</span>
        <ul className={styles.labelList}>
          <li className={styles.labelItem}>
            <Label logo='mask' status='required' />
            <span className={styles.labelText}>Obrigatório</span>
          </li>
          <li className={styles.labelItem}>
            <Label logo='mask' status='recommended' />
            <span className={styles.labelText}>Recomendado</span>
          </li>
        </ul>
      </li>
      <li className={styles.labelWrapper}>
        <span className={styles.labelHeading}>Toalha</span>
        <ul className={styles.labelList}>
          <li className={styles.labelItem}>
            <Label logo='towel' status='required' />
            <span className={styles.labelText}>Obrigatório</span>
          </li>
          <li className={styles.labelItem}>
            <Label logo='towel' status='recommended' />
            <span className={styles.labelText}>Recomendado</span>
          </li>
        </ul>
      </li>
      <li className={styles.labelWrapper}>
        <span className={styles.labelHeading}>Bebedouro</span>
        <ul className={styles.labelList}>
          <li className={styles.labelItem}>
            <Label logo='fountain' status='partial' />
            <span className={styles.labelText}>Parcial</span>
          </li>
          <li className={styles.labelItem}>
            <Label logo='fountain' status='not_allowed' />
            <span className={styles.labelText}>Proibido</span>
          </li>
        </ul>
      </li>
      <li className={styles.labelWrapper}>
        <span className={styles.labelHeading}>Vestiários</span>
        <ul className={styles.labelList}>
          <li className={styles.labelItem}>
            <Label logo='locker_room' status='allowed' />
            <span className={styles.labelText}>Liberado</span>
          </li>
          <li className={styles.labelItem}>
            <Label logo='locker_room' status='partial' />
            <span className={styles.labelText}>Parcial</span>
          </li>
          <li className={styles.labelItem}>
            <Label logo='locker_room' status='closed' />
            <span className={styles.labelText}>Fechado</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};
