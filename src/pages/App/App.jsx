import CustomTextarea from '../../utilities/components/CustomTextArea/CustomTextarea';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import { DragArea } from '../../utilities/components/DragAndDrop/DragArea';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const switchOn = () => {
    return setCounter(1);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div
          className="Board"
          tabIndex="0"
          role="textbox"
          onClick={switchOn}
          onKeyPress={switchOn}
        >
          {counter === 1 ? <DragArea /> : null}
        </div>

        {/* <div className="grid-container">
          <div
            tabIndex="0"
            role="textbox"
            id="one"
            onClick={switchOn}
            onKeyPress={switchOn}
          >
            {counter === 1 ? <CustomTextarea /> : null}
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div> */}
      </div>
    </DndProvider>
  );
}

export default App;
