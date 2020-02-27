import React from 'react';
import { render } from '@testing-library/react';

import factories from '#test/jest/factories';

import MusicList from './MusicList';

describe('MusicList', () => {
  it('should render the provided releases', () => {
    const releases = factories.music.buildList(3);
    const { getAllByTestId, getByText } = render(<MusicList releases={releases} />);

    expect(getAllByTestId('release').length).toBe(3);
    releases.forEach(({ node: release }) => {
      const yearString = String(new Date(release.date).getFullYear());
      expect(getByText(release.title)).toBeInTheDocument();
      expect(getByText(yearString)).toBeInTheDocument();
      expect(getByText(release.description)).toBeInTheDocument();
      expect(getByText(release.description)).toBeInTheDocument();
      expect(getByText(release.description)).toBeInTheDocument();
    });
  });
});
