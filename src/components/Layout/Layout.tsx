import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

import Contact from '#components/Contact';
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

const contactItems = [
  {
    content: <FontAwesomeIcon icon={faInstagram} />,
    name: 'Instagram',
    url: 'https://www.instagram.com/klangstof/',
  },
  {
    content: <FontAwesomeIcon icon={faFacebook} />,
    name: 'Facebook',
    url: 'https://www.facebook.com/klngstf/',
  },
  {
    content: <FontAwesomeIcon icon={faTwitter} />,
    name: 'Twitter',
    url: 'https://twitter.com/klangstof',
  },
  {
    content: <FontAwesomeIcon icon={faSoundcloud} />,
    name: 'Soundcloud',
    url: 'https://soundcloud.com/klangstof/',
  },
  { content: 'CONTACT', name: 'Contact', url: '/contact' },
];

const Layout = ({ children, currentPage }: Props) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Wrapper data-testid="layout-container">{children}</Wrapper>
        <Menu items={menuItems} current={currentPage} />
        <Contact items={contactItems} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Layout;
