import { EventDataContext } from './EventDataContext';

import { useEffect, useReducer, useContext } from 'react';

const TYPES = { LINES_ARRAY: 'linesArray', SELECTION_START: ' selectionStart' };

export const useCreateLinesObject = (lastLine) => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { selectionStart, liveWidth, keyPress } = keyDownEventData;

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

  useEffect(() => {
    if (keyPress === 'Enter') {
      dispatch({ type: TYPES.LINES_ARRAY });
    }
  }, [keyPress]);

  /**
   * Returned Value
   */

  return state;
};
