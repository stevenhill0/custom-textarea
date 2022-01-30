import { useDrag } from 'react-dnd';
import CustomTextarea from '../CustomTextArea/CustomTextarea';
import '../../../pages/App/App.css';

const DraggableDiv = ({ id, top, left }) => {
  const getStyle = (top, left, isDragging) => {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
      position: 'absolute',
      transform,
      WebkitTransform: transform,
      // IE fallback: hide the real node using CSS when dragging
      // because IE will ignore our custom "empty image" drag preview.
      opacity: isDragging ? 0 : 1,
      height: isDragging ? 0 : '',
    };
  };

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: 'textarea',
      item: { id, top, left },
      collect: (monitor) => {
        return { isDragging: !!monitor.isDragging() };
      },
    };
  }, [id, top, left]);

  return (
    <div ref={drag} style={getStyle(top, left, isDragging)}>
      <CustomTextarea />
    </div>
  );
};

export default DraggableDiv;
