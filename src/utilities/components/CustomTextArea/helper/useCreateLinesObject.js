import { EventDataContext } from './EventDataContext';

import { useEffect, useReducer, useContext } from 'react';

const TYPES = { LINES_ARRAY: 'linesArray', SELECTION_START: ' selectionStart' };

export const useCreateLinesObject = (keyPress, lastLine) => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { selectionStart, liveWidth } = keyDownEventData;

  const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.LINES_ARRAY:
        return { ...state, linesArray: [...state.linesArray, lastLine] };
      case TYPES.SELECTION_START:
        return {
          ...state,
          selectionStart: [...state.selectionStart, selectionStart],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    linesArray: [],
    selectionStart: [],
  });

  useEffect(() => {
    if (keyPress === 'Enter') {
      dispatch({ type: TYPES.LINES_ARRAY });
      dispatch({ type: TYPES.SELECTION_START });
    }
  }, [keyPress]);

  /**
   * Returned Value
   */
  console.log('linesArray:' + state.linesArray);
  console.log('selectionStart: ' + state.selectionStart);
  console.log(' lastLine: ' + lastLine);
  return state;
};
