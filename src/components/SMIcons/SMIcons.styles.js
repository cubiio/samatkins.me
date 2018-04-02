import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5em;
  width: 25%;
  overflow: auto;

  @media (max-width: 700px) {
    width: 80%;
    margin-top: 0;
  }
`;

export const SocialLogo = styled.div`
  height: 30px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
`;
