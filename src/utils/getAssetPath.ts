export const getAssetPath = (path: string): string => {
  let baseUrl = '';

  try {
    baseUrl = eval('import.meta.env.BASE_URL');
  } catch (e) {
    baseUrl = '';
  }

  return `${baseUrl}${path}`;
};
