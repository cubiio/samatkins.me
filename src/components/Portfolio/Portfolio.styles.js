import styled from 'styled-components';

export const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  line-height: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 60%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;
