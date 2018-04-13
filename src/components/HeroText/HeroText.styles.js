import styled from 'styled-components';

export const TextWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: span 2;

  @media (max-width: 700px) {
    grid-row-start: 2;
    grid-row-end: span 3;
  }
`;

export const HeaderText = styled.h2`
  padding-left: 20px;
  padding-right: 20px;
`;

export const BodyText = styled.p`
  padding-left: 20px;
  padding-right: 20px;
`;
