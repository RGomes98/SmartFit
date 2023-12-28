export const isActiveHoursIntersecting = (filterRange: number[], branchRange: number[]) => {
  const [filterStart, filterEnd] = filterRange;
  const [branchStart, branchEnd] = branchRange;
  const filterHours: number[] = [];
  const activeHours: number[] = [];

  for (let i = filterStart + 1; i < filterEnd; i++) filterHours.push(i);
  for (let i = branchStart; i <= branchEnd; i++) activeHours.push(i);

  return activeHours.some((activeHour) => filterHours.includes(activeHour));
};
