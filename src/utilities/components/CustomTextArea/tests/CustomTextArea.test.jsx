import { render, screen } from '@testing-library/react';
import CustomTextarea from '../CustomTextarea';
import userEvent from '@testing-library/user-event';

test('Click and type in custom textarea', () => {
  render(<CustomTextarea />);

  const customTextarea = screen.getByRole('textBox');
  userEvent.type(customTextarea, '12345 {enter}');
  userEvent.type(customTextarea, '123456789 {enter}');
});
