/* global it expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../src/components/Footer';

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
