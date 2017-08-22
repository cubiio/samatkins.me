/* global it expect */

import React from 'react'
import Hero from '../src/components/Hero'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Hero />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
