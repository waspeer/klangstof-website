import React from 'react';
import { render } from '@testing-library/react';

import factories from '#test/jest/factories';

import MusicList, { Release } from './MusicList';

jest.mock('gatsby-image', () => () => <span data-testid="image" />);
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="icon" />,
}));

describe('MusicList', () => {
  it('should render the provided releases', () => {
    const postAmount = 3;
    const releases = factories.music.buildList(postAmount);
    const { getAllByTestId, getByText } = render(<MusicList releases={releases} />);

    expect(getAllByTestId('release').length).toBe(postAmount);
    releases.forEach((release) => {
      expect(getByText(release.title)).toBeInTheDocument();
    });
  });
});

describe('Release', () => {
  it('should render the provided data', () => {
    const release = factories.music.build();
    const yearString = String(new Date(release.date).getFullYear());

    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId, getByText } = render(<Release {...release} />);

    expect(getByText(release.title)).toBeInTheDocument();
    expect(getByText(yearString)).toBeInTheDocument();
    expect(getByText(release.description)).toBeInTheDocument();
    expect(getByTestId('image')).toBeInTheDocument();
    expect(getByText(release.type)).toBeInTheDocument();

    release.links.forEach(({ platform, url }) => {
      const linkElement = getByTestId(`releaseLink-${platform}`);

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', url);
    });
  });
});
