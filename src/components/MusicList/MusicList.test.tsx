import React from 'react';
import { render } from '@testing-library/react';

import factories from '#test/jest/factories';

import MusicList from './MusicList';

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
