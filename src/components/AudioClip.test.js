import { render } from '@testing-library/react';
import AudioClip from './AudioClip';

test('should render children properly', () => {
  const childrenText = '::childrenText::';
  const { getByText } = render(<AudioClip>{childrenText}</AudioClip>);
  const childElement = getByText(childrenText);
  expect(childElement).toBeInTheDocument();
});
