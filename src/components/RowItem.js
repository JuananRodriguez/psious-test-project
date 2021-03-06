import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(p) => p.widthCols * 10}px;
  display: inline-block;
  height: 100%;
  background: white;
  border: 1px solid #32a1ce;
`;

function RowItem({ cols }) {
  return <RowItemWrapper data-testid="row-item" widthCols={cols} />;
}

RowItem.defaultProps = {
  cols: 10,
};

RowItem.propTypes = {
  cols: PropTypes.number,
};

export default RowItem;
