import { render } from '@testing-library/react';
import RowItem from './RowItem';

test('should calculate the width of the row based on the number of columns passed * 10px', () => {
  const colsMock = 20;
  const { getByTestId, rerender } = render(<RowItem cols={colsMock} offset={0} />);
  const childElement = getByTestId('row-item');
  expect(childElement).toHaveStyle(`width: ${colsMock * 10}px;`);

  const newCols = 5;
  rerender(<RowItem cols={newCols} offset={0} />);
  expect(childElement).toHaveStyle(`width: ${newCols * 10}px;`);
});

test('should calculate the left offset of the row based on the offset passed * 10px', () => {
  const offSetMock = 20;
  const { getByTestId, rerender } = render(<RowItem offset={offSetMock} cols={0} />);
  const childElement = getByTestId('row-item');
  expect(childElement).toHaveStyle(`margin-left: ${offSetMock * 10}px;`);

  const newOffset = 5;
  rerender(<RowItem offset={newOffset} cols={0} />);
  expect(childElement).toHaveStyle(`margin-left: ${newOffset * 10}px;`);
});
