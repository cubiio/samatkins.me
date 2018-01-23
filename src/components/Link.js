import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={['link'].concat(className || []).join(' ')} to={to}>
      {children}
    </GatsbyLink>
  );
}

Link.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
