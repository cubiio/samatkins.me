import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = props => {
  const { group, skills } = props.heroGroup;

  return (
    <ListBox>
      <GroupTitle>{group}</GroupTitle>
      <ul>{skills.map(skill => <p key={skill.id}>- {skill.name}</p>)}</ul>
    </ListBox>
  );
};

List.propTypes = {
  heroGroup: PropTypes.shape({}).isRequired,
};

export default List;

const ListBox = styled.div`
  margin-bottom: 20px;

  @media (max-width: 700px) {
    margin-bottom: 5px;
  }
`;

const GroupTitle = styled.h3`
  padding-bottom: 2px;
`;
