export const getAssetPath = (path: string): string => {
  const baseUrl = process.env.BASE_URL || '/';
  return `${baseUrl}${path}`;
};