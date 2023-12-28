import iconHour from '../../assets/images/icon-hour.png';
import styles from './BranchFilter.module.scss';

export const BranchFilter = () => {
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
            <input className={styles.checkbox} type='checkbox' />
            <span className={styles.timeOfDay}>Manhã</span>
            <span className={styles.hourRange}>06:00 às 12:00</span>
          </li>
          <li className={styles.optionItem}>
            <input className={styles.checkbox} type='checkbox' />
            <span className={styles.timeOfDay}>Tarde</span>
            <span className={styles.hourRange}>12:01 às 18:00</span>
          </li>
          <li className={styles.optionItem}>
            <input className={styles.checkbox} type='checkbox' />
            <span className={styles.timeOfDay}>Noite</span>
            <span className={styles.hourRange}>18:01 às 23:00</span>
          </li>
        </ul>
        <div className={styles.extraOptionWrapper}>
          <div className={styles.closedBranchWrapper}>
            <input className={styles.closedBranchCheckbox} type='checkbox' />
            <span className={styles.text}>Exibir unidades fechadas</span>
          </div>
          <span className={styles.text}>
            Resultados encontrados: <span className={styles.textBold}>{0}</span>
          </span>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>ENCONTRAR UNIDADE</button>
        <button className={styles.button}>LIMPAR</button>
      </div>
    </div>
  );
};
