import TextareaView from './components/TextareaView';
import { useCountLines } from './helper/useCountLines';
import { controlHeight } from './helper/controlTextareaHeight';
import { useAutoWidth } from './helper/useAutoWidth';
import { useState } from 'react';

const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [keyPress, setKeyPress] = useState({});
  const [activeCharacters, setActiveCharacters] = useState(0);
  const [charactersArray, setCharactersArray] = useState([]);
  const [linesCount, setLinesCount] = useState([]);
  const [measureWidthAndHeight, setMeasureWidthAndHeight] = useState({});

  const measureEvent = (event) => {
    const height = event.target.scrollHeight;
    const width = event.target.scrollWidth;

    setMeasureWidthAndHeight({
      height,
      width,
    });
  };

  const storeKeys = (event) => {
    setKeyPress(event);
    setActiveCharacters(event.target.value.length);

    if (event.key === 'Enter') {
      setCharactersArray((prevCharacters) => {
        return [...prevCharacters, event.target.value.length];
      });
    }
  };

  useCountLines(keyPress, charactersArray, setLinesCount);

  const useAutoWidthArgs = [
    charactersArray,
    keyPress,
    linesCount,
    measureWidthAndHeight,
    activeCharacters,
    textareaWidth,
    setTextareaWidth,
  ];

  useAutoWidth(...useAutoWidthArgs);

  controlHeight(measureWidthAndHeight, textareaHeight, setTextareaHeight);

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        onType={measureEvent}
        onKeyPress={storeKeys}
      />
    </div>
  );
};

export default CustomTextarea;
