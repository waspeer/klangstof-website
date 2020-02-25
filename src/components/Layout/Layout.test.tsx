import { render, screen } from '@testing-library/react';
import React from 'react';
import { withTheme } from 'styled-components';

import Layout from './Layout';
import { theme as expectedTheme } from '#lib/theme';

describe('Layout', () => {
  let children;

  beforeAll(() => {
    children = ['first!', 'second!'].map((item) => <p key={item}>{item}</p>);
    render(<Layout>{children}</Layout>);
  });

  it('renders children', () => {
    expect(screen.getByTestId('layout-container').children.length).toBe(2);
    expect(screen.queryAllByText(/first!|second!/).length).toBe(2);
  });

  it('provides the theme as context', () => {
    let actualTheme;

    const Consumer = withTheme(({ theme }) => {
      actualTheme = theme;
      return <div />;
    });

    render(
      <Layout>
        <Consumer />
      </Layout>,
    );

    expect(actualTheme).toEqual(expectedTheme);
  });
});
