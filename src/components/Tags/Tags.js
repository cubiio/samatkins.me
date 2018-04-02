import React from 'react';
import Link from 'gatsby-link';
import * as Styles from './Tags.styles';

export default function Tags({ list = [] }) {
  return (
    <Styles.TagListWrapper>
      Tags:
      {list.map(tag => (
        <Styles.TagList key={tag}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </Styles.TagList>
      ))}
    </Styles.TagListWrapper>
  );
}
