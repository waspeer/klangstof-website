import React from 'react';
import styled from 'styled-components';

import { Music_allMusicYaml_edges as AllMusicYaml } from '#lib/types/__generated__/Music';

type ReleaseProps = Pick<AllMusicYaml['node'], 'date' | 'description' | 'image' | 'title'>;

const Front = styled.div``;

const Back = styled.div``;

const BackButton = styled.div``;

const Title = styled.h2``;

const Year = styled.small``;

const Description = styled.p``;

const Release = ({ date, description, title }: ReleaseProps) => {
  const year = new Date(date).getFullYear();

  return (
    <div data-testid="release">
      <Front />
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
  releases: AllMusicYaml[];
}

const MusicList = ({ releases }: MusicListProps) => {
  return (
    <ul>
      {releases.map(({ node: { id, date, description, image, title } }) => (
        <li key={id}>
          <Release date={date} description={description} image={image} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MusicList;
