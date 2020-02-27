/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faItunes,
  faGooglePlay,
  faApple,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ReleaseDTO from '#lib/types/Release';

// ReleaseLink

interface ReleaseLinkProps {
  platform: string;
  url: string;
}

const iconMap = new Map<string, [string, () => JSX.Element]>([
  ['appleMusic', ['Apple Music', () => <FontAwesomeIcon icon={faItunes} />]],
  ['deezer', ['Deezer', () => <FontAwesomeIcon icon={faAlignLeft} rotation={270} />]],
  ['googlePlay', ['Google Play', () => <FontAwesomeIcon icon={faGooglePlay} />]],
  ['itunes', ['iTunes Store', () => <FontAwesomeIcon icon={faApple} />]],
  ['soundcloud', ['Soundcloud', () => <FontAwesomeIcon icon={faSoundcloud} />]],
  ['spotify', ['Spotify', () => <FontAwesomeIcon icon={faSpotify} />]],
  ['tidal', ['Tidal', () => <FontAwesomeIcon icon={faHeadphones} />]],
  ['youtube', ['Youtube', () => <FontAwesomeIcon icon={faYoutube} />]],
]);

const ReleaseLink = ({ platform, url }: ReleaseLinkProps) => {
  const [title, Icon] = iconMap.get(platform)!;

  return (
    <a data-testid={`releaseLink-${platform}`} href={url} title={title}>
      <Icon /> {title}
    </a>
  );
};

// Release

type ReleaseProps = ReleaseDTO;

const Front = styled.div``;

const Back = styled.div``;

const BackButton = styled.div``;

const Title = styled.h2``;

const Year = styled.small``;

const Description = styled.p``;

const Type = styled.i``;

const Links = styled.ul``;

export const Release = ({ id, date, description, image, links, title, type }: ReleaseProps) => {
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
        <Description>
          <Type>{type}</Type>
          {description}
        </Description>
        {links.length && (
          <Links>
            {links.map(({ platform, url }) => (
              <ul key={`link-${id}-${platform}`}>
                <ReleaseLink platform={platform} url={url} />
              </ul>
            ))}
          </Links>
        )}
      </Back>
    </div>
  );
};

// MusicList

interface MusicListProps {
  releases: ReleaseDTO[];
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  pointer-events: auto;
`;

const ListItem = styled.li`
  float: left;
  width: calc(90vh - 20px);
  height: calc(90vh - 20px);
  margin: 5vh;
  position: relative;
  perspective: 1000px;

  @media (orientation: 'portrait') {
    width: calc(50vh - 20px);
    height: calc(50vh - 20px);
    margin: 25vh 5vh;
  }
`;

const MusicList = ({ releases }: MusicListProps) => {
  return (
    <List>
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
    </List>
  );
};

export default MusicList;
