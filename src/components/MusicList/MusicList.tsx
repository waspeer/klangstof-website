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
import { faAlignLeft, faHeadphones, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

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

const ReleaseWrapper = styled.div`
  height: 100%;

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
`;

const Front = styled.div`
  display: none;
  backface-visibility: hidden;
`;

const Back = styled.div`
  backface-visibility: hidden;
  background-color: ${theme.colors.neutral};
  color: ${theme.colors.background};
  box-sizing: border-box;
  padding: 2em;
  overflow-y: scroll;
  height: 100%;
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
  const imageFluid = image.childImageSharp?.fluid as FluidObject;
  const year = new Date(date).getFullYear();

  const linkList = links.length && (
    <List
      createKey={({ platform }) => `link-${id}-${platform}`}
      items={links}
      renderItem={({ platform, url }) => {
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
    <ReleaseWrapper data-testid="release">
      <Front>
        <Image fluid={imageFluid} />
      </Front>
      <Back>
        <Header>
          <Title level={2} secondary={`${year}`}>
            {title}
          </Title>
          <Button type="primary" icon={<FontAwesomeIcon icon={faCaretLeft} />}>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: -20vw;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 20vw;
  min-width: 100%;
  height: calc(90vh - 20px);
  display: flex;
  overflow-x: auto;
`;

const ListItem = styled.li`
  height: 100%;
  overflow: hidden;
  min-width: calc(90vh - 20px);
  border: ${theme.colors.primary} 1px solid;
  margin-right: 1rem;
`;

const MusicList = ({ releases }: MusicListProps) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MusicList;
