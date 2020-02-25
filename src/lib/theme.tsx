import React from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeSettings {}

export const theme = {
  colors: {
    primary: '#c84f68',
    secondary: '#08525e',
    neutral: '#313031',
    background: '#edece6',
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
      font-family: "Helvetica Neue", sans-serif;

      &::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 10px solid ${theme.colors.neutral};
        border-left: none;
      }
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
