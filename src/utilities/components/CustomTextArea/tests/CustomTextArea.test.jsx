import { render, screen } from '@testing-library/react';
import CustomTextarea from '../CustomTextarea';
import userEvent from '@testing-library/user-event';

test('Click to create textarea', () => {
  render(<CustomTextarea />);
  const div = screen.getByRole('');
  const customTextarea = screen.getByRole('textbox');
});
