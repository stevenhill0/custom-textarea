import TextareaView from './components/TextareaView';
import { useCountLines } from './helper/useCountLines';
import { controlHeight } from './helper/controlTextareaHeight';
import { useAutoWidth } from './helper/useAutoWidth';
import { useState } from 'react';

const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [characterArray, setcharacterArray] = useState([]);
  const [lineCount, setLineCount] = useState([]);
  const [keyPress, setKeyPress] = useState({});
  const [widthAndHeight, setWidthAndHeight] = useState({});
  const [characters, setCharacters] = useState(0);

  const storeKeys = (event) => {
    setKeyPress(event);
    setCharacters(event.target.value.length);

    if (event.key === 'Enter') {
      setcharacterArray((prevCharacters) => {
        return [...prevCharacters, event.target.value.length];
      });
    }
  };

  useCountLines(keyPress, characterArray, setLineCount);

  const useAutoWidthArgs = [
    characterArray,
    keyPress,
    lineCount,
    widthAndHeight,
    characters,
    textareaWidth,
    setTextareaWidth,
  ];

  useAutoWidth(...useAutoWidthArgs);

  controlHeight(widthAndHeight, textareaHeight, setTextareaHeight);

  const measureEvent = (event) => {
    const height = event.target.scrollHeight;
    const width = event.target.scrollWidth;

    setWidthAndHeight({
      height,
      width,
    });
  };

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        handleEvent={measureEvent}
        controlEnterKey={storeKeys}
      />
    </div>
  );
};

export default CustomTextarea;
