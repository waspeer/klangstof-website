import React from 'react';
import { render, getByText } from '@testing-library/react';

import Contact from './Contact';

describe('Contact', () => {
  it('should render provided items', () => {
    const items = [
      { name: 'Item1', content: 'Item1', url: 'http://item1.com' },
      { name: 'Item2', content: 'Item2', url: 'http://item2.com' },
      { name: 'Item3', content: 'Item3', url: 'http://item3.com' },
    ];
    const { getAllByTestId, getByText } = render(<Contact items={items} />);

    expect(getAllByTestId('contactItem').length).toBe(3);
    items.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('should render a link', () => {
    const name = 'Item1';
    const url = 'http://item1.com';
    const items = [{ name, content: 'Item1', url }];
    const { getByTestId } = render(<Contact items={items} />);

    const link = getByTestId('contactItemLink');
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('title', name);
  });

  it('should render an element as content when provided', () => {
    const contentTestId = 'testContent';
    const items = [
      { content: <span data-testid={contentTestId} />, name: 'Item1', url: 'http://item1.com' },
    ];
    const { getByTestId } = render(<Contact items={items} />);

    expect(getByTestId('contactItem')).toContainElement(getByTestId(contentTestId));
  });
});
