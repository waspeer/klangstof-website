import React from 'react';
import { render } from '@testing-library/react';

import factories from '#test/jest/factories';

import MusicList from './MusicList';

jest.mock('gatsby-image', () => () => <span data-testid="image" />);

describe('MusicList', () => {
  it('should render the provided releases', () => {
    const postAmount = 3;
    const releases = factories.music.buildList(postAmount);
    const { getAllByTestId, getByText } = render(<MusicList releases={releases} />);

    expect(getAllByTestId('release').length).toBe(postAmount);
    releases.forEach((release) => {
      const yearString = String(new Date(release.date).getFullYear());
      expect(getByText(release.title)).toBeInTheDocument();
      expect(getByText(yearString)).toBeInTheDocument();
      expect(getByText(release.description)).toBeInTheDocument();
      expect(getAllByTestId('image').length).toBe(postAmount);
    });
  });
});
