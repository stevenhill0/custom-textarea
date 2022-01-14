let count = 0;

export const countCharacters = (
  event,
  characterCount,
  setCharacterCount,
  characterArray,
  setcharacterArray
) => {
  setCharacterCount(event.target.value.length);

  if (event.key === 'Enter') {
    setCharacterCount(event.target.value.length);

    setcharacterArray((prevCharacters) => {
      return [...prevCharacters, characterCount];
    });
  }
};
