import React from 'react';
import styled from 'styled-components';
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours';

const ReqComment = () => (
  <Wrapper>
    <Container>
      <hr />
      <p>
        Do you have any comments? You can tweet me{' '}
        <a
          href="https://twitter.com/samatkins"
          target="_blank"
          rel="noopener noreferrer"
        >
          @samatkins
        </a>.
      </p>
    </Container>
  </Wrapper>
);

export default ReqComment;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`;
