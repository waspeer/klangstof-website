import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { theme } from '#lib/theme';

// ContactItem

interface ContactItemProps {
  content: React.ReactNode;
  name: string;
  url: string;
}

const ContactItem = ({ content, name, url }: ContactItemProps) => {
  const isExternal = /^https?:\/\//.test(url);

  return isExternal ? (
    <a data-testid="contactItemLink" href={url} title={name}>
      {content}
    </a>
  ) : (
    <Link to={url} title={name}>
      {content}
    </Link>
  );
};

// Contact

interface ContactProps {
  items: ContactItemProps[];
}

const ContactList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  right: 10px;
  bottom: 0;
  background: ${theme.colors.background};
  font-weight: bold;
  font-size: 1rem;
`;

const ContactListItem = styled.li`
  margin: 1px 10px;

  &:first-child {
    margin-left: 20px;
  }

  a {
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.primary};
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

const Contact = ({ items }: ContactProps) => {
  return (
    <nav>
      <ContactList>
        {items.map(({ content, name, url }) => (
          <ContactListItem data-testid="contactItem" key={`contactItem-${name}`}>
            <ContactItem content={content} key={`contactItem-${name}`} name={name} url={url} />
          </ContactListItem>
        ))}
      </ContactList>
    </nav>
  );
};

export default Contact;
