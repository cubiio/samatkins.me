import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../../lib/theme/colours';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  overflow: auto;

  @media (max-width: 700px) {
  }
`;

export const FooterDiv = styled.div`
  padding-top: 1em;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }

  @media (max-width: 700px) {
    justify-self: center;
    max-width: 80%;
    text-align: center;
  }
`;
