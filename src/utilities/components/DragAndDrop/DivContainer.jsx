import DraggableDiv from './DraggableDiv';
import { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import '../../../pages/App/App.css';

const DragArea = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 180 },
  });

  const moveBox = useCallback(
    (id, top, left) => {
      setBoxes({ ...boxes, [id]: { top, left } });
    },
    [boxes],
  );

  const [, drop] = useDrop(() => {
    return {
      accept: 'textarea',
      drop: (item, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);

        moveBox(item.id, top, left);
      },
      // collect: (monitor) => {
      //   return { isOver: !!monitor.isOver() };
      // },
    };
  }, [moveBox]);

  return (
    <>
      <div className="Board" ref={drop}>
        {Object.keys(boxes).map((key) => {
          return <DraggableDiv key={key} id={key} {...boxes[key]} />;
        })}
      </div>
    </>
  );
};

export default DragArea;
