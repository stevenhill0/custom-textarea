import { createContext } from 'react';

export const EventDataContext = createContext({
  keyPress: '',
  selectionStart: 0,
  liveHeight: 0,
  liveWidth: 0,
  liveRowCount: 0,
  rowValue: '',
  typedOutCharacters: 0,
  typedOutCharactersZeroBased: 0,
});
