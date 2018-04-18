import styled from 'styled-components';

export const HeroWrapper = styled.div`
  padding: 5px;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`;

export const HeroHeader = styled.h2`
  padding-top: 10px;
  text-align: center;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 100%;
    grid-row-gap: 25px;
  }
`;
