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
  margin-left: auto;
  margin-right: auto;
`

// TODO change to scale ratio or rhythm unit
const GroupTitle = styled.h3`
  padding-bottom: 2px;
`
