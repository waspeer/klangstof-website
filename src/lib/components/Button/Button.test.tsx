import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

const TEST_ID = 'button';

describe('Button', () => {
  it('should render provided children', () => {
    const text = 'Blah';
    const { getByText } = render(<Button>{text}</Button>);
    expect(getByText(text)).toBeInTheDocument();

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

  it('should render a small button when the small prop is provided', () => {
    const { getByTestId } = render(<Button small />);
    expect(getByTestId(TEST_ID)).toHaveClass('small');
  });

  it('should render a large button when the large prop is provided', () => {
    const { getByTestId } = render(<Button large />);
    expect(getByTestId(TEST_ID)).toHaveClass('large');
  });

  it('should render a primary button when the primary prop is provided', () => {
    const { getByTestId } = render(<Button primary />);
    expect(getByTestId(TEST_ID)).toHaveClass('primary');
  });

  it('should render full-width when the block prop is provided', () => {
    const { getByTestId } = render(<Button block />);
    expect(getByTestId(TEST_ID)).toHaveStyle({ width: '100%' });
  });
});
