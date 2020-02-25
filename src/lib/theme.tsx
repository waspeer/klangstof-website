import React from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeSettings {}

const theme = {
  colors: {
    primary: '#9e0007',
    secondary: '#08525e',
    neutral: '#3c3c3c',
    background: '#eaeaea',
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export const GlobalStyle = createGlobalStyle`
    html, body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.neutral};
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1, h2, h3, h4 {
      color: ${theme.colors.primary};
      font-family: 'Courier New', Courier, monospace;
    }
  `;

interface ThemeProviderProps {
  settings?: ThemeSettings;
  children?: React.ReactNode;
}

export const ThemeProvider = ({ settings = {}, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={settings}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </StyledThemeProvider>
);
