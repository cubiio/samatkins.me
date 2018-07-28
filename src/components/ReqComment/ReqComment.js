import React from 'react';
import * as Styles from './ReqComment.styles';

const config = require('../../config/siteConfig');

const ReqComment = () => (
  <Styles.Wrapper>
    <Styles.Container>
      <hr />
      <p>
        Do you have any comments? You can tweet me{' '}
        <a
          href={`${config.twitterUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.twitterHandle}
        </a>.
      </p>
    </Styles.Container>
  </Styles.Wrapper>
);

export default ReqComment;
