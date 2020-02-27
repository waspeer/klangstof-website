/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ReleaseDTO from '#lib/types/Release';

type ReleaseProps = Pick<ReleaseDTO, 'date' | 'description' | 'image' | 'title'>;

const Front = styled.div``;

const Back = styled.div``;

const BackButton = styled.div``;

const Title = styled.h2``;

const Year = styled.small``;

const Description = styled.p``;

const Release = ({ date, description, image, title }: ReleaseProps) => {
  const imageFluid = image.childImageSharp?.fluid as FluidObject;
  const year = new Date(date).getFullYear();

  return (
    <div data-testid="release">
      <Front>
        <Image fluid={imageFluid} />
      </Front>
      <Back>
        <BackButton />
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Description>{description}</Description>
      </Back>
    </div>
  );
};

interface MusicListProps {
  releases: ReleaseDTO[];
}

const MusicList = ({ releases }: MusicListProps) => {
  return (
    <ul>
      {releases.map(({ id, date, description, image, title }) => (
        <li key={id}>
          <Release date={date} description={description} image={image} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MusicList;
