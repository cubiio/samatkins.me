import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../../lib/theme/colours';

export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
`;

export const TagList = styled.div`
  padding-left: 15px;
  padding-right: 2px;
  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
    border-color: red;
    border-width: medium;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
