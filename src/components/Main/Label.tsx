import notAllowedFountain from '../../assets/images/forbidden-fountain.png';
import allowedLockerRoom from '../../assets/images/required-lockerroom.png';
import closedLockerRoom from '../../assets/images/forbidden-lockerroom.png';
import partialLockerRoom from '../../assets/images/partial-lockerroom.png';
import recommendedTowel from '../../assets/images/recommended-towel.png';
import partialFountain from '../../assets/images/partial-fountain.png';
import recommendedMask from '../../assets/images/recommended-mask.png';
import requiredTowel from '../../assets/images/required-towel.png';
import requiredMask from '../../assets/images/required-mask.png';

import styles from './Label.module.scss';

export const Label = ({ logo, status }: { logo: string; status: string }) => {
  const labelCases: Record<string, { [key: string]: string }> = {
    mask: { required: requiredMask, recommended: recommendedMask },
    towel: { required: requiredTowel, recommended: recommendedTowel },
    fountain: { partial: partialFountain, not_allowed: notAllowedFountain },
    locker_room: { allowed: allowedLockerRoom, partial: partialLockerRoom, closed: closedLockerRoom },
  };

  return <img className={styles.logo} src={labelCases[logo][status]} alt='logo' />;
};
