export const getActiveHoursIntersection = (filterRange: number[], branchRange: number[]) => {
  const [filterStart, filterEnd] = filterRange;
  const [branchStart, branchEnd] = branchRange;

  const hours: { [index: number]: boolean } = {};

  for (let i = filterStart + 1; i < filterEnd; i++) hours[i] = true;
  for (let i = branchStart; i <= branchEnd; i++) if (hours[i]) return true;

  return false;
};
