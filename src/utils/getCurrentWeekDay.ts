export const getCurrentWeekDay = () => {
  const currentDay = new Date().getDay();

  const weekDaysCases: Record<number, string> = { 0: 'Dom.', 6: 'Sáb.' };

  return weekDaysCases[currentDay] || 'Seg. à Sex.';
};
