import styled from 'styled-components';

export const StyledFlagWrapper = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  padding-top: 0.4em;

   {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    grid-column-start: 2;
  }
`;

export const StyledFlag = styled.img`
  width: 1.3em;
  height: 1em;
  border: 1px solid black;
  margin-right: 0.2em;
`;
