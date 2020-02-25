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

import { GlobalStyle } from '#lib/theme';

import Contact from './Contact';
import Menu from './Menu';

interface Props {
  children: JSX.Element | JSX.Element[];
  currentPage: string;
}

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
      <GlobalStyle />
      <Wrapper data-testid="layout-container">{children}</Wrapper>
      <Menu items={menuItems} current={currentPage} />
      <Contact items={contactItems} />
    </HelmetProvider>
  );
};

export default Layout;
