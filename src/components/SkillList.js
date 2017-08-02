import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SkillList = ({ skill }) => {
  const { group, items } = skill

  return (
    <div>
      <SkillsBox className='skills-box'>
        <SkillGroupTitle>{group}</SkillGroupTitle>
        <ul>
          {items.map(item => <li>{item.name}</li>)}
        </ul>
      </SkillsBox>
    </div>
  )
}

SkillList.propTypes = {
  group: PropTypes.string,
  items: PropTypes.string
}

export default SkillList

/*
Styles
 */

const SkillsBox = styled.div`
  border-radius: 6px;
  flex: 1;
  font-size: 1em;
  font-weight: 200;
  line-height: 30px;
  padding-left: 35px;
`

// TODO change to scale ratio or rythm unit
const SkillGroupTitle = styled.h2`
  font-size: 20px;
`
