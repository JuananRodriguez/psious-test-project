import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import TimeLineRow from './TimeLineRow';
import Droppable from './Droppable';
import RowItem from './RowItem';

const BackGrid = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const COL_WIDTH = 10;
const COL_NUMBER = 100;
const ROW_HEIGHT = 45;
const DEFAULT_WIDTH = 20;

function setY(domValue) {
  return Math.round(domValue / ROW_HEIGHT);
}
function getY(dataSetValue) {
  return dataSetValue * ROW_HEIGHT;
}
function setX(domValue) {
  return Math.round(domValue / COL_WIDTH);
}
function getX(dataSetValue) {
  return dataSetValue * COL_WIDTH;
}
function setWidth(domValue) {
  return Math.round(domValue / COL_WIDTH);
}
function getWidth(dataSetValue) {
  return dataSetValue * COL_WIDTH;
}

const generateNewRow = () => ({
  id: nanoid(),
  items: [],
});

function TimeLine({ setConsoleOutside }) {
  const [rows, setRows] = useState([generateNewRow()]);

  function addNewRow() {
    setRows([...rows, generateNewRow()]);
  }

  function removeRowById(rowId) {
    setRows(rows.filter(({ id }) => id !== rowId));
  }

  function removeItemById(rowIndex, itemId) {
    const rowsClone = Array.from(rows);
    const row = rows[rowIndex];
    const rowItems = [...row.items].filter(({ id }) => id !== itemId);
    row.items = rowItems;
    rowsClone[rowIndex] = row;
    setRows(rowsClone);
  }

  function handleResizeItem(rowIndex, { id, lastWidth }, direction) {
    setWidth(lastWidth);
    const rowsClone = Array.from(rows);
    const rowItems = [...rowsClone[rowIndex].items];
    const itemIndex = rowItems.findIndex((item) => item.id === id);
    const { width, offset, ...item } = rowItems[itemIndex];
    const newWidth = setWidth(lastWidth);
    let newOffset = offset;

    if (direction === 'left') {
      const widthDiff = width - newWidth;
      newOffset += widthDiff;
    }

    rowItems[itemIndex] = { ...item, width: newWidth, offset: newOffset };
    rowsClone[rowIndex].items = rowItems;
    setRows(rowsClone);
  }

  function getVerifyYPos(yPos) {
    let newYPos = setY(yPos);
    newYPos = newYPos > -1 ? newYPos : 0;
    return newYPos >= rows.length ? rows.length - 1 : newYPos;
  }

  function getVerifyOffset(offset, width = getX(DEFAULT_WIDTH)) {
    const totalWidth = COL_WIDTH * COL_NUMBER;
    let newOffset = setX(offset);
    newOffset = newOffset > -1 ? newOffset : 0;
    return offset + width >= totalWidth ? setX(totalWidth - width) : newOffset;
  }

  function handleDropFromOutside({ node, yPos, xPos }) {
    const rowIndex = getVerifyYPos(yPos);
    const newOffset = getVerifyOffset(xPos);
    const rowsClone = Array.from(rows);
    const row = rows[rowIndex];
    const rowItems = [...row.items];
    const item = { id: nanoid(), width: DEFAULT_WIDTH, offset: newOffset, children: node };
    rowItems.push(item);
    row.items = rowItems;
    rowsClone[rowIndex] = row;
    setRows(rowsClone);
  }

  function handleInsideDrop(rowIndex, { id, lastY, lastX }) {
    const rowsClone = Array.from(rows);
    const rowItems = [...rowsClone[rowIndex].items];
    const itemIndex = rowItems.findIndex((item) => item.id === id);
    const item = rowItems.splice(itemIndex, 1)[0];
    rowsClone[rowIndex].items = rowItems;

    const newRowIndex = getVerifyYPos(lastY + getY(rowIndex));
    const newOffset = getVerifyOffset(lastX, getX(item.width));

    if (newRowIndex !== rowItems || newOffset !== item.offset) {
      const newItem = { ...item, offset: newOffset };
      const newItems = [...rowsClone[newRowIndex].items, newItem];
      rowsClone[newRowIndex] = { ...rowsClone[newRowIndex], items: newItems };
      setRows(rowsClone);
    }
  }

  function exportDataOption1() {
    const data = rows.map(({ items }) =>
      items.map(({ offset, width, children }) => ({
        offset,
        width,
        children: ReactDOMServer.renderToStaticMarkup(children),
      }))
    );
    setConsoleOutside(data);
  }

  function exportDataOption2() {
    const allTtems = [];
    rows.forEach(({ items }, index) =>
      allTtems.push(
        ...items.map(({ offset, width, children }) => ({
          rowIndex: index,
          offset,
          width,
          children: ReactDOMServer.renderToStaticMarkup(children),
        }))
      )
    );
    setConsoleOutside(allTtems);
  }

  return (
    <>
      <Droppable onDrop={handleDropFromOutside}>
        <BackGrid>
          {rows.map(({ id: rowId, items }, rowIndex) => (
            <TimeLineRow
              onRemove={removeRowById}
              key={rowId}
              id={rowId}
              colNumber={COL_NUMBER}
              colWidth={COL_WIDTH}
              rowHeight={ROW_HEIGHT}>
              {items.map(({ id: itemId, width, offset, children }) => (
                <RowItem
                  rowIndex={rowIndex}
                  offset={getX(offset)}
                  width={getWidth(width)}
                  key={itemId}
                  id={itemId}
                  onDrop={handleInsideDrop}
                  onResize={handleResizeItem}
                  onRemove={removeItemById}
                  rowHeight={ROW_HEIGHT}>
                  {children}
                </RowItem>
              ))}
            </TimeLineRow>
          ))}
        </BackGrid>
        <button onClick={addNewRow} type="button">
          Add timeline row
        </button>
        <button onClick={exportDataOption1} type="button">
          Export by rows
        </button>
        <button onClick={exportDataOption2} type="button">
          Export by items
        </button>
      </Droppable>
    </>
  );
}

TimeLine.propTypes = {
  setConsoleOutside: PropTypes.func.isRequired,
};

export default TimeLine;
