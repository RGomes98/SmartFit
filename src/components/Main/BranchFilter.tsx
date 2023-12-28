import type { BranchFilterSettings } from '../../types/types';
import type { Dispatch, SetStateAction } from 'react';

import iconHour from '../../assets/images/icon-hour.png';
import styles from './BranchFilter.module.scss';

type BranchFilter = {
  resetBranchFilter: () => void;
  updateBranchFilter: () => void;
  branchFilterSettings: BranchFilterSettings;
  setBranchFilterSettings: Dispatch<SetStateAction<BranchFilterSettings>>;
};

export const BranchFilter = ({
  resetBranchFilter,
  updateBranchFilter,
  branchFilterSettings,
  setBranchFilterSettings,
}: BranchFilter) => {
  const handleFilterClosedBranch = () => {
    setBranchFilterSettings((prev) => ({
      ...prev,
      isClosedBranchFilterActive: !prev['isClosedBranchFilterActive'],
    }));
  };

  const handleFilterCleanup = () => {
    resetBranchFilter();
    setBranchFilterSettings((prev) => ({ ...prev, isClosedBranchFilterActive: false, timeOfDay: null }));
  };

  const handleTimeOfDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeOfDay = event.currentTarget.id as (typeof branchFilterSettings)['timeOfDay'];
    setBranchFilterSettings((prev) => ({ ...prev, timeOfDay: timeOfDay }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <img className={styles.containerIcon} src={iconHour} alt='hour' />
        <span className={styles.containerHeading}>Horário</span>
      </div>
      <div className={styles.optionWrapper}>
        <span className={styles.optionHeading}>Qual período quer treinar?</span>
        <ul className={styles.optionList}>
          <li className={styles.optionItem}>
            <input
              id='morning'
              type='checkbox'
              onChange={handleTimeOfDay}
              className={styles.checkbox}
              checked={branchFilterSettings['timeOfDay'] === 'morning'}
            />
            <span className={styles.timeOfDay}>Manhã</span>
            <span className={styles.hourRange}>06:00 às 12:00</span>
          </li>
          <li className={styles.optionItem}>
            <input
              id='afternoon'
              type='checkbox'
              onChange={handleTimeOfDay}
              className={styles.checkbox}
              checked={branchFilterSettings['timeOfDay'] === 'afternoon'}
            />
            <span className={styles.timeOfDay}>Tarde</span>
            <span className={styles.hourRange}>12:01 às 18:00</span>
          </li>
          <li className={styles.optionItem}>
            <input
              id='night'
              type='checkbox'
              onChange={handleTimeOfDay}
              className={styles.checkbox}
              checked={branchFilterSettings['timeOfDay'] === 'night'}
            />
            <span className={styles.timeOfDay}>Noite</span>
            <span className={styles.hourRange}>18:01 às 23:00</span>
          </li>
        </ul>
        <div className={styles.extraOptionWrapper}>
          <div className={styles.closedBranchWrapper}>
            <input
              type='checkbox'
              className={styles.closedBranchCheckbox}
              onChange={handleFilterClosedBranch}
              checked={branchFilterSettings['isClosedBranchFilterActive']}
            />
            <span className={styles.text}>Exibir unidades fechadas</span>
          </div>
          <span className={styles.text}>
            Resultados encontrados:{' '}
            <span className={styles.textBold}>{branchFilterSettings['branchCount']}</span>
          </span>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={updateBranchFilter} className={styles.button}>
          ENCONTRAR UNIDADE
        </button>
        <button onClick={handleFilterCleanup} className={styles.button}>
          LIMPAR
        </button>
      </div>
    </div>
  );
};
