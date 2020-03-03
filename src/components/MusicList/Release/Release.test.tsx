import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import factories from '#test/jest/factories';

import Release from './Release';

jest.mock('gatsby-image', () => () => <span data-testid="image" />);
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="icon" />,
}));

const RELEASE_TEST_ID = 'release';

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

  it('should flip around when clicked', () => {
    const releaseData = factories.music.build();

    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<Release {...releaseData} />);
    const release = getByTestId(RELEASE_TEST_ID);

    expect(release).toHaveStyle('transform: rotateY(0deg)');

    fireEvent.click(getByTestId('releaseFlipToggleFront'));
    expect(release).toHaveStyle('transform: rotateY(180deg)');

    fireEvent.click(getByTestId('releaseFlipToggleBack'));
    expect(release).toHaveStyle('transform: rotateY(0deg)');
  });
});
