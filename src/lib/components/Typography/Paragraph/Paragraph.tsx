import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const P = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: 'tnum';
`;

const Paragraph = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Paragraph;
