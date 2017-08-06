import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = ({ d }) => {
  const { group, items } = d

  return (
    <div>
      <ListBox>
        <GroupTitle>{group}</GroupTitle>
        <ul>
          {items.map(item => <p>- {item.name}</p>)}
        </ul>
      </ListBox>
    </div>
  )
}

List.propTypes = {
  group: PropTypes.string,
  items: PropTypes.string
}

export default List

/*
Styles
 */

const ListBox = styled.div`
  border-radius: 6px;
  flex: 1;
  align-items: center;
  line-height: 30px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`

// TODO change to scale ratio or rythm unit
const GroupTitle = styled.h2`
  padding-bottom: 2px;
`
