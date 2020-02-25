import React from 'react';
import { render } from '@testing-library/react';

import Contact from './Contact';

jest.mock('gatsby', () => ({
  Link: ({ to, children, title }: any) => (
    <span data-testid="contactItemLink" data-to={to} data-title={title}>
      {children}
    </span>
  ),
}));

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

  it('should render interal links', () => {
    const name = 'internal';
    const url = '/internal';
    const items = [{ content: 'internal', name, url }];
    const { getByTestId } = render(<Contact items={items} />);

    const link = getByTestId('contactItemLink');
    expect(link).toHaveAttribute('data-to', url);
    expect(link).toHaveAttribute('data-title', name);
  });

  it('should render external links', () => {
    const name = 'external';
    const url = 'https://external.com';
    const items = [{ content: 'external', name, url }];
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
