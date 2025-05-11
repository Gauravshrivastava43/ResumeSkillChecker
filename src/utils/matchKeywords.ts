export const matchKeywords = (text: string, keywords: string[]) => {
  const lowerText = text.toLowerCase();
  const matched = keywords.filter(word => lowerText.includes(word.toLowerCase()));
  const percentage = Math.round((matched.length / keywords.length) * 100);
  return { matched, percentage };
};
