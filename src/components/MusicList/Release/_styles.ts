import styled, { keyframes } from 'styled-components';

import { theme } from '#lib/theme';

const wiggle = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  33% {
    transform: rotateY(2deg);
  }
  66% {
    transform: rotateY(-1deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const Back = styled.div`
  backface-visibility: hidden;
  background-color: ${theme.colors.neutral};
  bottom: 0;
  box-sizing: border-box;
  color: ${theme.colors.background};
  height: 100%;
  left: 0;
  overflow-y: scroll;
  padding: 2em;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateY(180deg);
`;

export const Front = styled.div`
  backface-visibility: hidden;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateY(0);

  &:hover {
    animation: ${wiggle} 0.3s ease-in-out;
  }
`;

export const FrontOverlay = styled.div`
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateZ(50px) rotateY(0deg);
  transition: opacity 0.2s 0.5s;

  &:hover {
    opacity: 1;
  }

  div {
    background: ${theme.colors.neutral};
    border-radius: 2px;
    bottom: 10%;
    color: white;
    font-size: 0.9rem;
    left: 50%;
    padding: 0.25rem 0.75rem;
    position: absolute;
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    flex: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const Type = styled.i`
  opacity: 0.8;

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: all 0.6s;

  &:hover ${FrontOverlay} {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  a {
    color: #a8bdff;
  }
`;
