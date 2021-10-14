export const computeRatingWidth = (rating: number): string => `${(rating / 5) * 100 }%`;

export const formatDateYYYYMMDD = (date: Date): string => {
  let dd = '00';
  let mm = '00';
  const d = date.getDate();
  dd = (d < 10) ? d.toString().padStart(2, '0') : d.toString();
  const m = date.getMonth() + 1;
  mm = (m < 10) ? m.toString().padStart(2, '0') : m.toString();
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export const formatDateMMMMYYYY = (date: Date): string => new Date(date).toLocaleString('en', {
  year: 'numeric',
  month: 'long',
});
