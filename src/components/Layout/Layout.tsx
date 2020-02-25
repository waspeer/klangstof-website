import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import styled from 'styled-components';

import Menu from '#components/Menu';
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
  currentPage: string;
}

const menuItems = [
  { content: 'TOUR', url: '/tour' },
  { content: 'STORE', url: 'https://store.klangstof.com' },
  { content: 'MUSIC', url: '/music' },
];

const Layout = ({ children, currentPage }: Props) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Wrapper data-testid="layout-container">{children}</Wrapper>
        <Menu items={menuItems} current={currentPage} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Layout;
