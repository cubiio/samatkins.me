import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './SkillList.styles';

const SkillList = props => {
  const { group, skills } = props.heroGroup;

  return (
    <Styles.SkillListBox>
      <Styles.GroupTitle>{group}</Styles.GroupTitle>
      <ul>{skills.map(skill => <p key={skill.id}>- {skill.name}</p>)}</ul>
    </Styles.SkillListBox>
  );
};

SkillList.propTypes = {
  heroGroup: PropTypes.shape({}).isRequired,
};

export default SkillList;
