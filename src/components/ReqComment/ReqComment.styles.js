import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../../lib/theme/colours';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
