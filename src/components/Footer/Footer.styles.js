import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../../lib/theme/colours';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  overflow: auto;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
