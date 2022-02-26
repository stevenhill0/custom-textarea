import { TextareaView } from './components/TextareaView/TextareaView';
import { useControlDimensions } from './helper/useControlDimensions';
import { useState } from 'react';

export const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [charactersArray, setCharactersArray] = useState([]);
  const [pressedKeysAndMeasurement, setPressedKeysAndMeasurement] = useState({
    keyPress: null,
    liveHeight: 0,
    liveWidth: 0,
    liveRows: 0,
    typedCharacters: 0,
  });

  /**
   * Handlers
   */

  const keyPressData = (event) => {
    setPressedKeysAndMeasurement({
      keyPress: event.key,
      liveHeight: event.target.scrollHeight,
      liveWidth: event.target.scrollWidth,
      liveRows: event.target.rows,
      typedCharacters: event.target.value.length,
    });

    if (event.key === 'Enter') {
      setCharactersArray((prevCharacters) => {
        return [...prevCharacters, event.target.value.length];
      });
    }
  };

  /**
   * Custom Hooks
   */

  useControlDimensions(
    pressedKeysAndMeasurement,
    setTextareaHeight,
    textareaHeight,
    setTextareaWidth,
    textareaWidth,
    charactersArray,
  );

  /**
   * Component
   */

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        onKeyDown={keyPressData}
      />
    </div>
  );
};
