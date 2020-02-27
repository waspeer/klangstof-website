import React from 'react';
import styled from 'styled-components';

import { useParallax } from '#lib/hooks';
import { theme } from '#lib/theme';

import homeImage from '#images/home.jpg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Shadow = styled.div`
  position: absolute;
  background-color: ${theme.colors.neutral};
  width: 25vw;
  height: 65vh;
  top: 10vh;
  left: calc(20vw - 50px);

  @media (orientation: portrait) {
    top: calc(20vh + 10px);
    left: calc(20vw + 10px);
    width: 60vw;
    height: 45vh;
  }
`;

const Photo = styled.div`
  position: absolute;
  background: url(${homeImage}) center 10% no-repeat;
  background-size: cover;
  width: 60vw;
  height: 45vh;
  top: 20vh;
  left: 20vw;
`;

const Logo = styled.h1`
  position: absolute;
  bottom: 27vh;
  left: 18vw;
  width: 80vw;
  height: 20vh;
  font-weight: bold;
  color: white;
  font-size: 10vw;

  @media (orientation: portrait) {
    top: 55vh;
    left: 15vw;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-color: ${theme.colors.primary};
  width: 10vw;
  height: 10vw;
  top: 10vh;
  left: 75vw;
  opacity: 0.6;

  @media (orientation: portrait) {
    display: none;
  }
`;

const Collage = () => {
  const parallaxElement = useParallax();

  return (
    <Wrapper ref={parallaxElement}>
      <Layer data-depth="0.15">
        <Shadow />
      </Layer>
      <Layer data-depth="0.2">
        <Photo />
      </Layer>
      <Layer data-depth="0.3">
        <Logo>KLANGSTOF</Logo>
      </Layer>
      <Layer data-depth="0.5">
        <Overlay />
      </Layer>
    </Wrapper>
  );
};

export default Collage;
