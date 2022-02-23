import TextareaView from './components/TextareaView';
import { useCountLines } from './helper/useCountLines';
import useControlDimensions from './helper/useControlDimensions';
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
    const rows = event.target.rows;

    setMeasureWidthAndHeight({
      height,
      width,
      rows,
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

  useControlDimensions(
    keyPress,
    setTextareaHeight,
    textareaHeight,
    measureWidthAndHeight,
    charactersArray,
  );

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        onType={measureEvent} // 2 re-renders of 5
        onKeyDown={storeKeys} // 3 re-renders of 5
      />
    </div>
  );
};

export default CustomTextarea;
