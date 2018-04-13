import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../../lib/theme/colours';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`;

export const HeroIntro = styled.div`
  margin-bottom: 60px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
  }

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
