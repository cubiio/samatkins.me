import React from 'react';
import * as Styles from './ReqComment.styles';

const ReqComment = () => (
  <Styles.Wrapper>
    <Styles.Container>
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
    </Styles.Container>
  </Styles.Wrapper>
);

export default ReqComment;
