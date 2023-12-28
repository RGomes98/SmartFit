import { formatHour } from './formatHour';

export const getBranchActiveHours = (activeHours: string) => {
  if (!activeHours.includes('às')) return [];

  const [start, _, end] = activeHours.split(' '); //eslint-disable-line @typescript-eslint/no-unused-vars

  return [formatHour(start), formatHour(end)];
};
