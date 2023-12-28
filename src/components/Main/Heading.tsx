import styles from './Heading.module.scss';

export const Heading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>REABERTURA SMART FIT</h1>
      <p className={styles.text}>
        O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso,
        confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
      </p>
    </div>
  );
};
