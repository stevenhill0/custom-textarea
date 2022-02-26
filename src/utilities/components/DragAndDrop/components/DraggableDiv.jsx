import { useDrag } from 'react-dnd';
import { CustomTextarea } from '../../CustomTextArea/CustomTextarea';
import { getStyle } from '../styles';

export const DraggableDiv = ({ id, top, left }) => {
  getStyle(top, left);

  /**
   * Library
   */

  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: 'textarea',
      item: { id, top, left },
      collect: (monitor) => {
        return { isDragging: !!monitor.isDragging() };
      },
    };
  }, [id, top, left]);

  /**
   * Component
   */

  return (
    <div ref={drag} style={getStyle(top, left, isDragging)}>
      <CustomTextarea />
    </div>
  );
};
