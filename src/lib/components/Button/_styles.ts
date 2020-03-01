import styled, { keyframes } from 'styled-components';

import { theme } from '#lib/theme';

export const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 0.6em;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate} 1s linear infinite;
  border-color: ${theme.colors.background} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  border-radius: 50%;
  border-style: solid;
  border-width: 0.15em;
  display: inline-block;
  height: 1em;
  width: 1em;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border-color: grey;
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 1px;
  color: grey;
  cursor: pointer;
  display: inline-block;
  font-style: italic;
  font-weight: bold;
  overflow: hidden;
  padding: 0.3rem 1rem;
  position: relative;
  text-transform: lowercase;
  transition: all 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.2s;
  }

  &:active {
    &::before {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &:hover {
    background-color: ${theme.colors.background};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    &::before {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &.block {
    width: 100%;
  }

  &.large {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  }

  &.loading {
    cursor: default;
    pointer-events: none;

    &::after {
      background-color: white;
      border-radius: inherit;
      bottom: -1px;
      content: '';
      left: -1px;
      opacity: 0.35;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  &.primary {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.neutral};
    color: ${theme.colors.neutral};

    &:hover {
      border-color: ${theme.colors.background};
      color: ${theme.colors.background};
    }
  }

  &.small {
    padding: 0.15rem 0.25rem;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    border-color: grey;
    color: grey;
    cursor: not-allowed;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-color: grey;
      color: grey;

      &::before {
        content: none;
      }
    }
  }

  span {
    position: relative;
  }
`;
