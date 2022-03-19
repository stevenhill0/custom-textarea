import { TextareaView } from './components/TextareaView/TextareaView';
import { IncreaseWidth } from './components/IncreaseWidth/IncreaseWidth';
import { useWidthState } from './helper/useWidthState';
import { useHeightState } from './helper/useHeightState';

import { useState } from 'react';

export const CustomTextarea = () => {
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

  /**
   * Custom Hooks
   */

  const textareaWidth = useWidthState(keyDownEventData);
  const textareaHeight = useHeightState(keyDownEventData);

  /**
   * Component
   */

  return (
    <div>
      <IncreaseWidth keyDownEventData={keyDownEventData} />
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        onKeyDown={keyPressData}
      />
    </div>
  );
};
