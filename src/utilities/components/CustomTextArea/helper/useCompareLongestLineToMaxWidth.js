export const useCompareLongestLineToMaxWidth = (liveWidth, longestLine) => {
  const difference = liveWidth - longestLine;
  const result = difference + longestLine;

  return result;
};
