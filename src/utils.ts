export function formatReviewDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
}
