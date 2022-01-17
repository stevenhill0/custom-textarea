export const countCharacters = (
  event,
  characterArray,
  setcharacterArray,
  lineCount,
  setLineCount
) => {
  if (event.key === 'Enter') {
    setcharacterArray((prevCharacters) => {
      return [...prevCharacters, event.target.value.length];
    });

    // const lastNumber = characterArray[characterArray.length - 1];
    // const secondLast = characterArray[characterArray.length - 2];
    // const firstLine = characterArray[0] + 1;
    // const lastLine = lastNumber - secondLast - 1;

    // console.log('First Line : ' + firstLine);
    // console.log('Last Line : ' + lastLine);
    // // console.log(`characterCount: ${characterCount}`);
    // console.log(`characterArray: ${characterArray}`);
    // firstLine > lastLine ? setLineCount(firstLine) : setLineCount(lastLine);
  }
};
