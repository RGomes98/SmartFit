import { BranchFilterSettings } from '../types/types';

export const getFilterActiveHours = (timeOfDay: BranchFilterSettings['timeOfDay']) => {
  if (!timeOfDay) return [];

  const timeOfDayCases: Record<string, number[]> = {
    morning: [6, 12],
    afternoon: [12, 18],
    night: [18, 23],
  };

  return timeOfDayCases[timeOfDay];
};
