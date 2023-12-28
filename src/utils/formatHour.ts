export const formatHour = (hour: string) => {
  const formattedHour = hour.replace('h', '');
  return formattedHour.length >= 3 ? parseInt(formattedHour.charAt(0)) : parseInt(formattedHour);
};
