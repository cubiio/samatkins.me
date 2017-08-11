import React from 'react'
import GatsbyLink from 'gatsby-link'
import HomeIcon from 'react-icons/lib/fa/home'
import TagsIcon from 'react-icons/lib/fa/tags'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SMIcons from '../components/SMIcons'
import Link from '../components/Link'
import {
  BACKGROUND_BLOGPOST_HOVER, NAV_ANCHOR, NAV_ANCHOR_HOVER
} from '../lib/theme/colours'

export default function Tags ({ pathContext }) {
  const { posts, post, tag } = pathContext
  if (tag) {
    return (
      <div>
        <Nav />
        <TagWrapper>
          <TagTitle>
            {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
          </TagTitle>
          <ul>
            {post.map(({ id, frontmatter }) => {
              return (
                <p key={id}>
                  <TagLinkTitle>
                    <GatsbyLink to={frontmatter.path}>
                      {frontmatter.title} / published {frontmatter.date}
                    </GatsbyLink>
                  </TagLinkTitle>
                </p>
              )
            })}
          </ul>
          <Link to='/tags'>
            <TagsIcon /> All tags
          </Link>
          <SMIcons />
          <Footer />
        </TagWrapper>
      </div>
    )
  }
  return (
    <div>
      <Nav />
      <TagWrapper>
        <TagTitle>Tags</TagTitle>
        <TagList>
          {Object.keys(posts).map(tagName => {
            const tags = posts[tagName]
            return (
              <TagListItem key={tagName}>
                <GatsbyLink to={`/tags/${tagName}`}>
                  {tagName}
                </GatsbyLink>
              </TagListItem>
            )
          })}
        </TagList>
        <Link to='/blog'>
          <HomeIcon /> All posts
        </Link>
        <SMIcons />
        <Footer />
      </TagWrapper>
    </div>
  )
}

/**
 * Styles
 */

const TagWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (max-width: 700px) {
    width: 95%;
  }
`

const TagTitle = styled.h3`
  padding: 0px 5px;
`

const TagLinkTitle = styled.h3`
  padding: 0px 5px;
  position: relative;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
    display: block;
    transition: all 0.5s ease-in-out;
  }
    &:hover {
      color: ${NAV_ANCHOR_HOVER};
      background: ${BACKGROUND_BLOGPOST_HOVER};
      padding: 0px 20px;
    }
`

const TagList = styled.ul`
  display: block;
  list-style-type: none;
  margin-left: .5em;
  text-align: justify;
  width: 9em;
`

const TagListItem = styled.li`
  a {
    color: ${NAV_ANCHOR};
    padding-left: .5em;
    text-decoration: none;
  }

    &:hover {
      color: ${NAV_ANCHOR_HOVER};
      background: ${BACKGROUND_BLOGPOST_HOVER};
    }
`
