import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faItunes,
  faGooglePlay,
  faApple,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAlignLeft,
  faHeadphones,
  faCaretLeft,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import classNames from '@sindresorhus/class-names';
import Image, { FluidObject } from 'gatsby-image';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import anime from 'animejs';
import styled, { keyframes, css } from 'styled-components';

import Button from '#lib/components/Button';
import ReleaseDTO from '#lib/types/Release';
import { theme } from '#lib/theme';
import { Title, Paragraph } from '#lib/components/Typography';
import List from '#lib/components/List';

type ReleaseProps = ReleaseDTO;

const iconMap = new Map<string, [string, JSX.Element]>([
  ['appleMusic', ['Apple Music', <FontAwesomeIcon icon={faItunes} />]],
  ['deezer', ['Deezer', <FontAwesomeIcon icon={faAlignLeft} rotation={270} />]],
  ['googlePlay', ['Google Play', <FontAwesomeIcon icon={faGooglePlay} />]],
  ['itunes', ['iTunes Store', <FontAwesomeIcon icon={faApple} />]],
  ['soundcloud', ['Soundcloud', <FontAwesomeIcon icon={faSoundcloud} />]],
  ['spotify', ['Spotify', <FontAwesomeIcon icon={faSpotify} />]],
  ['tidal', ['Tidal', <FontAwesomeIcon icon={faHeadphones} />]],
  ['youtube', ['Youtube', <FontAwesomeIcon icon={faYoutube} />]],
]);

const FrontOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(50px) rotateY(0deg);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s 0.5s;

  &:hover {
    opacity: 1;
  }

  div {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    padding: 0.25rem 0.75rem;
    background: ${theme.colors.neutral};
    color: white;
    border-radius: 2px;
    font-size: 0.9rem;
  }
`;

const ReleaseWrapper = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  transition: all 0.6s;
  transform: rotateY(0deg);

  &:hover ${FrontOverlay} {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  a {
    color: #a8bdff;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:first-child {
    flex: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
`;

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

const Front = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: rotateY(0);
  cursor: pointer;

  &:hover {
    animation: ${wiggle} 0.3s ease-in-out;
  }
`;

const Back = styled.div`
  backface-visibility: hidden;
  background-color: ${theme.colors.neutral};
  color: ${theme.colors.background};
  box-sizing: border-box;
  padding: 2em;
  overflow-y: scroll;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: rotateY(180deg);
`;

const Type = styled.i`
  opacity: 0.8;

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`;

export const Release = ({ id, date, description, image, links, title, type }: ReleaseProps) => {
  const [flipped, setFlipped] = useState(false);
  const imageFluid = image.childImageSharp?.fluid as FluidObject;
  const year = new Date(date).getFullYear();
  const classes = classNames({ flipped });

  const toggleFlip = () => setFlipped(!flipped);

  const linkList = links.length && (
    <List
      createKey={({ platform }) => `link-${id}-${platform}`}
      items={links}
      renderItem={({ platform, url }) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const [linkTitle, Icon] = iconMap.get(platform)!;
        return (
          <Button href={url} icon={Icon} testId={`releaseLink-${platform}`} type="link">
            {linkTitle}
          </Button>
        );
      }}
      large
    />
  );

  return (
    <ReleaseWrapper className={classes} data-testid="release">
      <Front data-testid="releaseFlipToggleFront" onClick={toggleFlip}>
        <Image fluid={imageFluid} />
      </Front>
      <FrontOverlay>
        <div>Click for more information...</div>
      </FrontOverlay>
      <Back>
        <Header>
          <Title level={2} secondary={`${year}`}>
            {title}
          </Title>
          <Button
            icon={<FontAwesomeIcon icon={faCaretLeft} />}
            onClick={toggleFlip}
            testId="releaseFlipToggleBack"
            type="primary"
          >
            Back
          </Button>
        </Header>
        <Paragraph>
          <Type>{type}</Type> {description}
        </Paragraph>
        {linkList}
      </Back>
    </ReleaseWrapper>
  );
};

// MusicList

interface MusicListProps {
  releases: ReleaseDTO[];
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  @media (min-width: ${theme.breakpoints.sm}px) {
    overflow-x: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: -20vw;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
    overflow-x: hidden;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  min-width: 100%;
  height: calc(90vh - 20px);
  padding: 0;
  display: flex;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-left: 20vw;

    &::after {
      content: '';
      min-width: 25vw;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: block;
    min-height: 100%;
  }
`;

const ListItem = styled.li`
  perspective: 1000px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin-right: 1rem;
    height: 100%;
    min-width: calc(90vh - 20px);
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    margin-bottom: 1rem;
    padding-bottom: 100%;
  }
`;

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

const scrollTriggerStyle = css`
  align-items: center;
  display: flex;
  opacity: 0;
  position: fixed;
  top: 10px;
  bottom: 10px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`;

const ScrollTriggerRight = styled.div`
  ${scrollTriggerStyle}

  background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${theme.colors.background});
  justify-content: flex-end;
  width: 25vw;
  right: 10px;

  & > * {
    animation: ${swingLeft} 1s infinite;
    display: block;
    font-size: 2rem;
    margin-right: 2rem;
    opacity: 0.75;
  }
`;

const ScrollTriggerLeft = styled.div`
  ${scrollTriggerStyle}

  background: linear-gradient(-90deg, rgba(255, 255, 255, 0), ${theme.colors.background});
  width: calc(20vw);
  left: 10px;

  & > * {
    animation: ${swingRight} 1s infinite;
    display: block;
    font-size: 2rem;
    margin-left: 4rem;
    opacity: 0.75;
  }
`;

const SCROLL_SPEED = 500 / 1000;

const MusicList = ({ releases }: MusicListProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  // const interval = useRef<number>(null);
  const animation = useRef<anime.AnimeInstance>(null);

  // useEffect(() => {
  //   if (window) smoothscroll.polyfill();
  // }, []);

  const stopScroll = () => {
    if (animation.current) animation.current.pause();
  };
  const startScroll = useCallback(
    (direction: 'left' | 'right') => () => {
      if (wrapper.current) {
        const wrapperElement = wrapper.current;
        const target =
          direction === 'left' ? 0 : wrapperElement.scrollWidth - wrapperElement.clientWidth;
        const distance = Math.abs(target - wrapperElement.scrollLeft);
        animation.current = anime({
          targets: wrapperElement,
          scrollLeft: target,
          easing: 'linear',
          duration: distance / SCROLL_SPEED,
        });
      }
    },
    [wrapper],
  );
  const startScrollRight = startScroll('right');
  const startScrollLeft = startScroll('left');

  return (
    <Wrapper ref={wrapper}>
      <StyledList>
        {releases.map(({ id, date, description, image, links, title, type }) => (
          <ListItem key={id}>
            <Release
              id={id}
              date={date}
              description={description}
              image={image}
              links={links}
              title={title}
              type={type}
            />
          </ListItem>
        ))}
      </StyledList>
      <ScrollTriggerRight
        onMouseOver={startScrollRight}
        onFocus={startScrollRight}
        onMouseOut={stopScroll}
        onBlur={stopScroll}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ScrollTriggerRight>
      <ScrollTriggerLeft
        onMouseOver={startScrollLeft}
        onFocus={startScrollLeft}
        onMouseOut={stopScroll}
        onBlur={stopScroll}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </ScrollTriggerLeft>
    </Wrapper>
  );
};

export default MusicList;
