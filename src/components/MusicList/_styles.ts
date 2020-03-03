import styled, { keyframes, css } from 'styled-components';

import { theme } from '#lib/theme';

const FRAME_SIZE = '10px';
const ITEM_SIZE = 'calc(90vh - 20px)';
const MAIN_CONTENT_OFFSET = '20vw';
const SCROLL_TRIGGER_WIDTH = '20vw';

const swingLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-1rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const swingRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ListItem = styled.li`
  perspective: 1000px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    height: 100%;
    margin-right: 1rem;
    min-width: ${ITEM_SIZE};
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    margin-bottom: 1rem;
    padding-bottom: 100%;
  }
`;

const scrollTriggerStyle = css`
  align-items: center;
  bottom: ${FRAME_SIZE};
  display: flex;
  opacity: 0;
  position: fixed;
  top: ${FRAME_SIZE};
  transition: opacity 0.5s;
  width: ${SCROLL_TRIGGER_WIDTH};

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const ScrollTriggerLeft = styled.div`
  ${scrollTriggerStyle}

  background: linear-gradient(-90deg, rgba(255, 255, 255, 0), ${theme.colors.background});
  left: ${FRAME_SIZE};

  & > * {
    animation: ${swingRight} 1s infinite;
    display: block;
    font-size: 2rem;
    margin-left: 4rem;
    opacity: 0.75;
  }
`;

export const ScrollTriggerRight = styled.div`
  ${scrollTriggerStyle}

  background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${theme.colors.background});
  justify-content: flex-end;
  right: ${FRAME_SIZE};

  & > * {
    animation: ${swingLeft} 1s infinite;
    display: block;
    font-size: 2rem;
    margin-right: 2rem;
    opacity: 0.75;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  height: ${ITEM_SIZE};
  list-style: none;
  margin: 0;
  min-width: 100%;
  padding: 0;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-left: ${MAIN_CONTENT_OFFSET};

    &::after {
      content: '';
      min-width: ${SCROLL_TRIGGER_WIDTH};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
    min-height: 100%;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  position: relative;

  @media (min-width: ${theme.breakpoints.sm}px) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: -${MAIN_CONTENT_OFFSET};
    overflow-x: auto;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
    overflow-x: hidden;
  }
`;
