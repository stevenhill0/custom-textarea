import { TextareaView } from './components/TextareaView/TextareaView';
import { IncreaseWidth } from './components/IncreaseWidth/IncreaseWidth';
import { useWidthState } from './helper/useWidthState';
import { useHeightState } from './helper/useHeightState';
import { EventDataContext } from './helper/EventDataContext';

import React, { useState, useReducer } from 'react';

// const TYPES = { KEY_DOWN_EVENT_DATA: 'keyDownEventData' };

export const CustomTextarea = () => {
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case TYPES.KEY_DOWN_EVENT_DATA:
  //       return {
  //         keyDownEventData: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, {
  //   keyDownEventData: {
  //     keyPress: '',
  //     selectionStart: 0,
  //     liveHeight: 0,
  //     liveWidth: 0,
  //     liveRowCount: 0,
  //     rowValue: '',
  //     typedOutCharacters: 0,
  //     typedOutCharactersZeroBased: 0,
  //   },
  // });

  const [keyDownEventData, setKeyDownEventData] = useState({
    keyPress: '',
    selectionStart: 0,
    liveHeight: 0,
    liveWidth: 0,
    liveRowCount: 0,
    rowValue: '',
    typedOutCharacters: 0,
    typedOutCharactersZeroBased: 0,
  });

  /**
   * Handlers
   */

  const keyPressData = (event) => {
    // dispatch({
    //   type: TYPES.KEY_DOWN_EVENT_DATA,
    //   payload: {
    //     keyPress: event.key,
    //     selectionStart: event.target.selectionStart, // +1 cos useState is delayed by render
    //     liveHeight: event.target.scrollHeight,
    //     liveWidth: event.target.scrollWidth,
    //     liveRowCount: event.target.rows,
    //     rowValue: event.target.value,
    //     typedOutCharacters: event.target.value.length + 1, // +1 cos length is 0-based
    //     typedOutCharactersZeroBased: event.target.value.length,
    //   },
    // });

    setKeyDownEventData({
      keyPress: event.key,
      selectionStart: event.target.selectionStart, // +1 cos useState is delayed by render
      liveHeight: event.target.scrollHeight,
      liveWidth: event.target.scrollWidth,
      liveRowCount: event.target.rows,
      rowValue: event.target.value,
      typedOutCharacters: event.target.value.length + 1, // +1 cos length is 0-based
      typedOutCharactersZeroBased: event.target.value.length,
    });
  };

  // const eventData = state.keyDownEventData ?? '';

  /**
   * Custom Hooks
   */

  const textareaWidth = useWidthState(keyDownEventData);
  const textareaHeight = useHeightState(keyDownEventData);

  /**
   * Component
   */

  return (
    <EventDataContext.Provider value={keyDownEventData}>
      <div>
        <IncreaseWidth />
        <TextareaView
          controlHeight={textareaHeight}
          controlWidth={textareaWidth}
          onKeyDown={keyPressData}
        />
      </div>
    </EventDataContext.Provider>
  );
};
