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

  return (
    <MenuItemWrapper data-testid="MenuItem">
      {isExternal ? (
        <a data-testid="MenuItemExternalLink" href={url}>
          {content}
        </a>
      ) : (
        <Link to={url}>{content}</Link>
      )}
    </MenuItemWrapper>
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
`;

const Menu = ({ current, items }: MenuProps) => {
  return (
    <MenuList>
      {items.map(({ content, url }) =>
        current === content ? (
          <MenuItem content={<FontAwesomeIcon icon={faCaretUp} />} key="back" url="/" />
        ) : (
          <MenuItem content={content} key={url} url={url} />
        ),
      )}
    </MenuList>
  );
};

export default Menu;
