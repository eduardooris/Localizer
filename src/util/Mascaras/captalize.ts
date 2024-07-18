export const captalize = (str: string) => {
  if (str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
  }
  return str;
};
