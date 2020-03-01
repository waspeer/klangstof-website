import styled, { css } from 'styled-components';

import { theme } from '#lib/theme';

const HeaderStyle = css`
  color: ${theme.colors.primary};
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;

  small {
    font-size: 70%;
    margin-left: 0.75rem;
    opacity: 0.8;
    color: ${theme.colors.background};

    &:before {
      content: '(';
    }

    &:after {
      content: ')';
    }
  }
`;

export const Header1 = styled.h1`
  ${HeaderStyle}
  font-size: 2.4rem;
  line-height: 1.23;
`;

export const Header2 = styled.h2`
  ${HeaderStyle}
  font-size: 1.9rem;
  line-height: 1.35;
`;

export const Header3 = styled.h3`
  ${HeaderStyle}
  font-size: 1.5rem;
  line-height: 1.35;
`;

export const Header4 = styled.h4`
  ${HeaderStyle}
  font-size: 1.25rem;
  line-height: 1.4;
`;
