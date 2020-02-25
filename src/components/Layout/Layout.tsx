import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import styled from 'styled-components';

import Nav from '#components/Nav';
import { GlobalStyle, ThemeProvider } from '#lib/theme';

const Wrapper = styled.main`
  position: fixed;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  padding-left: 20vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Nav />
        <Wrapper data-testid="layout-container">{children}</Wrapper>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Layout;
