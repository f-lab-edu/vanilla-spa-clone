export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  return `${year}. ${month}. ${day}`;
};
