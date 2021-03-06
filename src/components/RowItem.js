import PropTypes from 'prop-types';
import styled from 'styled-components';

const colDimension = 10;

const RowItemWrapper = styled.div`
  margin-left: ${(p) => p.marginOffset * colDimension}px;
  width: ${(p) => p.widthCols * colDimension}px;
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  background: white;
  border: 1px solid #32a1ce;
`;

function RowItem({ cols, offset }) {
  return <RowItemWrapper data-testid="row-item" widthCols={cols} marginOffset={offset} />;
}

RowItem.propTypes = {
  cols: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default RowItem;
