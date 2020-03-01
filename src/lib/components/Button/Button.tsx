import classNames from '@sindresorhus/class-names';
import React from 'react';

import { Spinner, StyledButton, IconWrapper } from './_styles';

interface Props {
  /**
   * Renders the button full-width.
   */
  block?: boolean;

  /**
   * Button children.
   */
  children?: React.ReactNode;

  /**
   * Disables the button.
   */
  disabled?: boolean;

  /**
   * Passed to the button's `type` attribute.
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
   */
  htmlType?: 'button' | 'reset' | 'submit';

  /**
   * Renders an icon to the left of the button children.
   */
  icon?: React.ReactNode;

  /**
   * Renders a large icon.
   */
  large?: boolean;

  /**
   * Disables the button and shows a spinner.
   */
  loading?: boolean;

  /**
   * The handler to the `click` event.
   */
  onClick?: (...params: any[]) => any;

  /**
   * Sets the color scheme to primary.
   */
  primary?: boolean;

  /**
   * Renders a small button.
   */
  small?: boolean;
}

const Button = ({
  block,
  children,
  disabled = false,
  htmlType = 'button',
  icon,
  large,
  loading = false,
  onClick,
  primary,
  small,
}: Props) => {
  const iconOrNull = loading ? <Spinner /> : icon || null;
  const classes = classNames({ block, large, loading, primary, small });

  return (
    <StyledButton
      className={classes}
      data-testid="button"
      disabled={disabled || loading}
      onClick={onClick}
      type={htmlType}
    >
      {iconOrNull && <IconWrapper>{iconOrNull}</IconWrapper>}
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
