import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({ d, listIdx }) => {
  const { group, items } = d;

  return (
    <ListBox key={listIdx}>
      <GroupTitle key={listIdx}>{group}</GroupTitle>
      <ul key={listIdx}>
        {items.map((item, itemIdx) => <p key={itemIdx}>- {item.name}</p>)}
      </ul>
    </ListBox>
  );
};

List.propTypes = {
  group: PropTypes.string,
  items: PropTypes.string,
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
