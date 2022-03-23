export const useCheckKeys = (keyPress) => {
  /**
   * Logic
   */

  const keyCheck = [
    'Enter',
    'Backspace',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Escape',
    'Control',
    'Shift',
    '(space)',
    'F12',
  ];

  const keyArray = keyCheck.filter((key) => {
    return key === keyPress;
  });

  const pressedKey = keyArray.toString();

  /**
   * Returned Value
   */

  return pressedKey;
};
