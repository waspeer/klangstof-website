import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

const TEST_ID = 'button';

describe('Button default', () => {
  it('should render provided children', () => {
    const text = 'Blah';
    const { getByText } = render(<Button>{text}</Button>);
    expect(getByText(text)).toBeInTheDocument();

    cleanup();

    const elementTestId = 'element';
    const { getByTestId } = render(
      <Button>
        <span data-testid={elementTestId} />
      </Button>,
    );
    expect(getByTestId(elementTestId)).toBeInTheDocument();
  });

  it('should accept a htmlType and render accordingly', () => {
    const defaultType = 'button';
    const types = [undefined, 'button', 'submit', 'reset'] as const;

    types.forEach((type) => {
      const { getByTestId } = render(<Button htmlType={type} />);
      expect(getByTestId(TEST_ID)).toHaveAttribute('type', type || defaultType);
      cleanup();
    });
  });

  it('should call the onClick handler when clicked', () => {
    const handler = jest.fn();
    const { getByTestId } = render(<Button onClick={handler} />);

    fireEvent.click(getByTestId(TEST_ID));

    expect(handler).toHaveBeenCalled();
  });

  it('should disable the button when the disable prop is provided', () => {
    const { getByTestId } = render(<Button disabled />);
    expect(getByTestId(TEST_ID)).toHaveAttribute('disabled');
  });

  it('should render the icon provided in the icon prop', () => {
    const iconTestId = 'icon';
    const { getByTestId } = render(<Button icon={<span data-testid={iconTestId} />} />);
    expect(getByTestId(iconTestId)).toBeInTheDocument();
  });

  it('should render the loading state when provided with the loading prop', () => {
    const { getByTestId } = render(<Button loading />);
    expect(getByTestId(TEST_ID)).toHaveAttribute('disabled');
    expect(getByTestId(TEST_ID)).toHaveClass('loading');
  });

  it('should render a small button when the size property is set to small', () => {
    const { getByTestId } = render(<Button size="small" />);
    expect(getByTestId(TEST_ID)).toHaveClass('small');
  });

  it('should render a large button when the size property is set to large', () => {
    const { getByTestId } = render(<Button size="large" />);
    expect(getByTestId(TEST_ID)).toHaveClass('large');
  });

  it('should render a primary button when type prop is set to primary', () => {
    const { getByTestId } = render(<Button type="primary" />);
    expect(getByTestId(TEST_ID)).toHaveClass('primary');
  });

  it('should render full-width when the block prop is provided', () => {
    const { getByTestId } = render(<Button block />);
    expect(getByTestId(TEST_ID)).toHaveStyle({ width: '100%' });
  });
});

describe('Button[type=link]', () => {
  it('should render an anchor element when the type is set to link', () => {
    const text = 'Blah';
    const { container, getByText } = render(<Button type="link">{text}</Button>);
    expect(container.querySelector('a')).toHaveAttribute('data-testid', TEST_ID);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should set the href attribute when provided', () => {
    const url = 'http://hyves.nl';
    const { getByTestId } = render(<Button href={url} type="link" />);
    expect(getByTestId(TEST_ID)).toHaveAttribute('href', url);
  });

  it('should call the onClick handler when clicked', () => {
    const handler = jest.fn();
    const { getByTestId } = render(<Button onClick={handler} type="link" />);

    fireEvent.click(getByTestId(TEST_ID));

    expect(handler).toHaveBeenCalled();
  });

  it('should disable the button when the disable prop is provided', () => {
    const handler = jest.fn();
    const { getByTestId } = render(<Button disabled onClick={handler} type="link" />);
    fireEvent.click(getByTestId(TEST_ID));
    expect(handler).not.toHaveBeenCalled();
  });

  it('should render the loading state when provided with the loading prop', () => {
    const handler = jest.fn();
    const { getByTestId } = render(<Button loading onClick={handler} type="link" />);
    fireEvent.click(getByTestId(TEST_ID));
    expect(handler).not.toHaveBeenCalled();
    expect(getByTestId(TEST_ID)).toHaveClass('loading');
  });
});
