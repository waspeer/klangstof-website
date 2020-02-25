import { render } from '@testing-library/react';
import React from 'react';

const Title = () => <h1 data-testid="hero-title">Smoke</h1>;

test('Displays the correct title', () => {
  const { getByTestId } = render(<Title />);

  expect(getByTestId('hero-title')).toHaveTextContent('Smoke');
});
