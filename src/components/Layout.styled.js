import styled, { css } from 'styled-components';

const commonBlockCss = css`
  min-height: 50vh;
  overflow: auto;
  position: relative;
  border: 1px solid black;
  padding: 1rem;
`;

export const TimelineZone = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  ${commonBlockCss}
`;

export const ClipZone = styled.section`
  ${commonBlockCss}
`;

export const JSONZone = styled.section`
  ${commonBlockCss}
`;

export const EditorWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  overflow: hidden;
  position: relative;
`;
