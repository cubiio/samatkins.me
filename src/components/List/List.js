import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './List.styles';

const List = props => {
  const { group, skills } = props.heroGroup;

  return (
    <Styles.ListBox>
      <Styles.GroupTitle>{group}</Styles.GroupTitle>
      <ul>{skills.map(skill => <p key={skill.id}>- {skill.name}</p>)}</ul>
    </Styles.ListBox>
  );
};

List.propTypes = {
  heroGroup: PropTypes.shape({}).isRequired,
};

export default List;
