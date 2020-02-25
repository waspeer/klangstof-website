import React from 'react';
import { render } from '@testing-library/react';

import Menu from './Menu';

jest.mock('gatsby', () => ({
  Link: ({ to, children }: any) => (
    <span data-testid="MenuItemInternalLink" data-to={to}>
      {children}
    </span>
  ),
}));

describe('Menu', () => {
  it('should render provided items', () => {
    const items = [
      { content: 'item1', url: '/item1' },
      { content: 'item2', url: '/item2' },
      { content: 'item3', url: '/item3' },
    ];
    const { getAllByTestId, getByText } = render(<Menu items={items} />);

    expect(getAllByTestId('MenuItem').length).toBe(3);
    items.forEach((item) => {
      expect(getByText(item.content)).toBeInTheDocument();
    });
  });

  it('should render interal links', () => {
    const url = '/internal';
    const items = [{ content: 'internal', url }];
    const { getByTestId } = render(<Menu items={items} />);

    expect(getByTestId('MenuItemInternalLink')).toHaveAttribute('data-to', url);
  });

  it('should render external links', () => {
    const url = 'https://external.com';
    const items = [{ content: 'external', url }];
    const { getByTestId } = render(<Menu items={items} />);

    expect(getByTestId('MenuItemExternalLink')).toHaveAttribute('href', url);
  });

  it('should display the backbutton instead of current item', () => {
    const currentItem = 'current';
    const otherItem = 'otherItem';
    const items = [
      { content: currentItem, url: '/current' },
      { content: otherItem, url: '/other' },
    ];
    const { queryByText, getAllByTestId } = render(<Menu items={items} current={currentItem} />);

    expect(queryByText(currentItem)).toBeNull();
    expect(queryByText(otherItem)).toBeInTheDocument();
    expect(getAllByTestId('MenuItemInternalLink').length).toBe(2);
  });
});
