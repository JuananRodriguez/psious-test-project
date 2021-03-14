import { render, fireEvent } from '@testing-library/react';
import TimeLineRow from './TimeLineRow';

const onRemoveMock = jest.fn();
const childrenMock = 'children';
const idMock = 'id';
const colsMock = 20;

const MockedProps = {
  colWidth: 10,
  rowHeight: 45,
  children: childrenMock,
  onRemove: onRemoveMock,
  id: idMock,
  colNumber: colsMock,
};

test('should render children properly', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByText } = render(<TimeLineRow {...MockedProps} />);
  const childElement = getByText(childrenMock);
  expect(childElement).toBeInTheDocument();
});

test('should call remove funtion on click remove button properly', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByRole } = render(<TimeLineRow {...MockedProps} />);
  const removeButton = getByRole('button');
  fireEvent.click(removeButton);
  expect(onRemoveMock).toHaveBeenCalled();
  expect(onRemoveMock).toHaveBeenCalledWith(idMock);
});

test('should calculate the width of the row based on the number of columns passed * 10px', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByText, rerender } = render(<TimeLineRow {...MockedProps} />);
  const childElement = getByText(childrenMock);
  expect(childElement).toHaveStyle(`width: ${colsMock * 10}px;`);

  const newCols = 5;
  // eslint-disable-next-line react/jsx-props-no-spreading
  rerender(<TimeLineRow {...MockedProps} colNumber={newCols} />);
  expect(childElement).toHaveStyle(`width: ${newCols * 10}px;`);
});
