export const generateRandomID = (): string => {
  return `id-${Date.now()}-${Math.random().toString().substring(2)}`;
};
