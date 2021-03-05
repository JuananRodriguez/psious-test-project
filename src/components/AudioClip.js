import PropTypes from 'prop-types';
import styled from 'styled-components';

const AudioClipWrapper = styled.div`
  width: 200px;
  height: 40px;
  background: white;
`;

function AudioClip({ children }) {
  return <AudioClipWrapper>{children}</AudioClipWrapper>;
}

AudioClip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AudioClip;
