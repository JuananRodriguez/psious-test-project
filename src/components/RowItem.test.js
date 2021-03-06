import { render } from '@testing-library/react';
import RowItem from './RowItem';

test('should calculate the width of the row based on the number of columns passed * 10px', () => {
  const colsMock = 20;
  const { getByTestId, rerender } = render(<RowItem cols={colsMock} />);
  const childElement = getByTestId('row-item');
  expect(childElement).toHaveStyle(`width: ${colsMock * 10}px;`);

  const newCols = 5;
  rerender(<RowItem cols={newCols} />);
  expect(childElement).toHaveStyle(`width: ${newCols * 10}px;`);
});
