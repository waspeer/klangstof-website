import {
  faItunes,
  faGooglePlay,
  faApple,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faHeadphones, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from '@sindresorhus/class-names';
import Image, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';

import Button from '#lib/components/Button';
import List from '#lib/components/List';
import { Title, Paragraph } from '#lib/components/Typography';
import ReleaseDTO from '#lib/types/Release';
import { Back, Front, FrontOverlay, Header, Wrapper, Type } from './_styles';

type Props = ReleaseDTO;

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

const Release = ({ id, date, description, image, links, title, type }: Props) => {
  const [flipped, setFlipped] = useState(false);
  const imageFluid = image.childImageSharp?.fluid as FluidObject;
  const year = new Date(date).getFullYear();
  const classes = classNames({ flipped });

  const toggleFlip = () => setFlipped(!flipped);

  const linkList = links.length && (
    <List
      createKey={({ platform }) => `link-${id}-${platform}`}
      items={links}
      large
      renderItem={({ platform, url }) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const [linkTitle, Icon] = iconMap.get(platform)!;
        return (
          <Button href={url} icon={Icon} testId={`releaseLink-${platform}`} type="link">
            {linkTitle}
          </Button>
        );
      }}
    />
  );

  return (
    <Wrapper className={classes} data-testid="release">
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
    </Wrapper>
  );
};

export default Release;
