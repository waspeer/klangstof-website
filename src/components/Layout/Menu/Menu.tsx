import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { theme } from '#lib/theme';

// MenuItem

interface MenuItemProps {
  content: React.ReactNode;
  url: string;
}

const MenuItemWrapper = styled.li`
  a {
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const MenuItem = ({ content, url }: MenuItemProps) => {
  const isExternal = /^https?:\/\//.test(url);

  return isExternal ? (
    <a data-testid="MenuItemExternalLink" href={url}>
      {content}
    </a>
  ) : (
    <Link to={url}>{content}</Link>
  );
};

// Menu

interface MenuProps {
  current?: string;
  items: MenuItemProps[];
}

const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  bottom: -3rem;
  left: 0;
  padding: 0 10px;
  margin: 0;
  height: 3rem;
  width: 100vh;
  font-weight: bold;
  font-size: 2.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: rotate(-90deg);
  transform-origin: left top;
  transition: font-size 0.2s;

  @media (max-height: 450px) {
    font-size: 7vh;
  }
`;

const Menu = ({ current, items }: MenuProps) => (
  <nav aria-label="menu">
    <MenuList>
      {items.map(({ content, url }) =>
        current === content ? (
          <MenuItemWrapper data-testid="MenuItem" key="back">
            <MenuItem content={<FontAwesomeIcon icon={faCaretUp} />} key="menuItem-back" url="/" />
          </MenuItemWrapper>
        ) : (
          <MenuItemWrapper data-testid="MenuItem" key={`menuItem-${url}`}>
            <MenuItem content={content} url={url} />
          </MenuItemWrapper>
        ),
      )}
    </MenuList>
  </nav>
);

export default Menu;
