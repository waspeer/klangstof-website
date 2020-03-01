import { render } from '@testing-library/react';
import React from 'react';

import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('should render the provided children', () => {
    const text = 'Blah';
    const { getByText } = render(<Paragraph>{text}</Paragraph>);
    expect(getByText(text)).toBeInTheDocument();

    const elementTestId = 'element';
    const { getByTestId } = render(
      <Paragraph>
        <span data-testid={elementTestId} />
      </Paragraph>,
    );
    expect(getByTestId(elementTestId)).toBeInTheDocument();
  });
});
