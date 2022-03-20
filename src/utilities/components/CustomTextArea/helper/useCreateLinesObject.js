import { useEffect, useReducer } from 'react';

export const useCreateLinesObject = (keyPress, lastLine) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'linesArray':
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
      dispatch({ type: 'linesArray' });
    }
  }, [keyPress]);

  return state;
};
