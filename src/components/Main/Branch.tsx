import { Location } from '../../types/types';
import { Fragment } from 'react';
import { Label } from './Label';

import styles from './Branch.module.scss';

export const Branch = ({ location }: { location: Location }) => {
  const { opened, title, content, mask, towel, fountain, locker_room, schedules } = location;

  return (
    <div className={styles.container}>
      <div className={styles.branchHeading}>
        <span className={`${styles.branchStatus} ${(!opened && styles.closed) || ''}`}>
          {opened ? 'Aberto' : 'Fechado'}
        </span>
        <span className={styles.branchTitle}>{title}</span>
        <div
          className={styles.branchLocation}
          dangerouslySetInnerHTML={{ __html: (content && content) || '' }}
        ></div>
      </div>
      {opened && (
        <div className={styles.branchDetails}>
          <div className={styles.branchLabels}>
            <Label logo='mask' status={(mask && mask) || ''} />
            <Label logo='towel' status={(towel && towel) || ''} />
            <Label logo='fountain' status={(fountain && fountain) || ''} />
            <Label logo='locker_room' status={(locker_room && locker_room) || ''} />
          </div>
          <ul className={styles.scheduleList}>
            {schedules?.map(({ hour, weekdays }) => {
              return (
                <Fragment>
                  <li className={styles.scheduleItem}>
                    <span className={styles.weekdays}>{weekdays}</span>
                    <span className={styles.hours}>{hour}</span>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
