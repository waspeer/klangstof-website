import { render } from '@testing-library/react';
import React from 'react';

import List from './List';

const TEST_ID = 'list';

describe('List', () => {
  it('should render provided items', () => {
    const items = [...Array(3)].map(() => <span data-testid="item" />);
    const { getAllByTestId } = render(<List items={items} />);
    expect(getAllByTestId('item').length).toBe(3);
  });

  it('should render without items', () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId(TEST_ID)).toBeInTheDocument();
  });

  it('should render the data with the renderItem function when provided', () => {
    const items = [{ id: 'item1' }, { id: 'item2' }, { id: 'item3' }];
    const renderItem = ({ id }: { id: string }) => <span data-testid={id} />;
    const { getByTestId } = render(<List items={items} renderItem={renderItem} />);
    items.forEach(({ id }) => expect(getByTestId(id)).toBeInTheDocument());
  });

  it('should accept a createKey function and render accordingly', () => {
    const items = [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }];
    const createKey = ({ name }: { name: string }) => name;
    const renderItem = ({ name }: { name: string }, key: string) => (
      <span data-testid={name}>{key}</span>
    );
    const { getByTestId } = render(
      <List createKey={createKey} items={items} renderItem={renderItem} />,
    );
    items.forEach(({ name }) => expect(getByTestId(name)).toHaveTextContent(name));
  });

  it('should render a bordered list when provided with the bordered prop', () => {
    const { getByTestId } = render(<List bordered />);
    expect(getByTestId(TEST_ID)).toHaveClass('bordered');
  });

  it('should render a small list when provided with the small prop', () => {
    const { getByTestId } = render(<List small />);
    expect(getByTestId(TEST_ID)).toHaveClass('small');
  });

  it('should render a large list when provided with the large prop', () => {
    const { getByTestId } = render(<List large />);
    expect(getByTestId(TEST_ID)).toHaveClass('large');
  });

  it('should render a split list when provided with the split prop', () => {
    const { getByTestId } = render(<List split />);
    expect(getByTestId(TEST_ID)).toHaveClass('split');
  });

  it('should render a loading state when provided with the loading prop', () => {
    const { getByTestId } = render(<List loading />);
    expect(getByTestId(TEST_ID)).toHaveClass('loading');
  });

  it('should render a footer element when provided', () => {
    const footerText = 'Smelly footer';
    const { getByText } = render(<List footer={footerText} />);
    expect(getByText(footerText)).toBeInTheDocument();

    const footerTestId = 'smellyFooter';
    const { getByTestId } = render(<List footer={<span data-testid={footerTestId} />} />);
    expect(getByTestId(footerTestId)).toBeInTheDocument();
  });

  it('should render a header element when provided', () => {
    const headerText = 'Smelly header';
    const { getByText } = render(<List header={headerText} />);
    expect(getByText(headerText)).toBeInTheDocument();

    const headerTestId = 'smellyheader';
    const { getByTestId } = render(<List header={<span data-testid={headerTestId} />} />);
    expect(getByTestId(headerTestId)).toBeInTheDocument();
  });
});
