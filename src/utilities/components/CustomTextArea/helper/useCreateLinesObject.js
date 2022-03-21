import { EventDataContext } from './EventDataContext';

import { useEffect, useReducer, useContext } from 'react';

const TYPES = { LINES_ARRAY: 'linesArray', SELECTION_START: ' selectionStart' };

export const useCreateLinesObject = (lastLine) => {
  const value = useContext(EventDataContext);
  const { selectionStart, liveWidth, keyPress } = value;

  console.log(liveWidth);

  const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.LINES_ARRAY:
        return { ...state, linesArray: [...state.linesArray, lastLine] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    linesArray: [],
    selectionStart: 0,
  });

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      dispatch({ type: TYPES.LINES_ARRAY });
    }
  }, [keyPress]);

  return state;
};
