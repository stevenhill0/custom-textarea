export const countCharacters = (
  event,
  characterCount,
  setCharacterCount,
  setcharacterArray
) => {
  setCharacterCount(event.target.value.length + 1);

  if (event.key === 'Enter') {
    setCharacterCount(event.target.value.length - 1);
    setcharacterArray((prevCharacters) => {
      return [...prevCharacters, characterCount - 1];
    });
  }
};
