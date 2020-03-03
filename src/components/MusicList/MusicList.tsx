import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useCallback } from 'react';
import anime from 'animejs';

import ReleaseDTO from '#lib/types/Release';

import { ListItem, ScrollTriggerLeft, ScrollTriggerRight, StyledList, Wrapper } from './_styles';
import Release from './Release';

interface Props {
  releases: ReleaseDTO[];
}

const SCROLL_SPEED = 500 / 1000;

const MusicList = ({ releases }: Props) => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const animation = useRef<anime.AnimeInstance | null>(null);

  const stopScroll = () => {
    if (animation.current) animation.current.pause();
  };

  const startScroll = useCallback(
    (direction: 'left' | 'right') => () => {
      if (wrapper.current) {
        const wrapperElement = wrapper.current;

        let target: number;
        if (direction === 'left') target = 0;
        else target = wrapperElement.scrollWidth - wrapperElement.clientWidth;

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

  const startScrollLeft = startScroll('left');
  const startScrollRight = startScroll('right');

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
