/* global graphql */

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SMIcons from '../components/SMIcons'
import {
  BACKGROUND_BLOGPOST_HOVER,
  NAV_ANCHOR,
  NAV_ANCHOR_HOVER
} from '../lib/theme/colours'

export default function Blog ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Nav />
      <BlogPostWrapper>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div>
                <BlogPostPreview key={post.id}>
                  <BlogPostTitle>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title} / published {post.frontmatter.date}
                    </Link>
                  </BlogPostTitle>
                </BlogPostPreview>
              </div>
            )
          })}
      </BlogPostWrapper>
      <SMIcons />
      <Footer />
    </div>
  )
}

/*
Data query via GraphQL
 */

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD-MMM-YYYY")
            path
          }
        }
      }
    }
  }
`

/*
Styles
 */

const BlogPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const BlogPostPreview = styled.div`
  padding: .5rem 0.25rem;
  border-bottom: 2px solid #EEE;
  margin: 0 auto;
  padding: 0;
`

const BlogPostTitle = styled.div`
  flex-basis: auto;
  align-self: flex-start;
  font-weight: bold;
  margin: 0;
  position: relative;
  padding: 20px 5px;

  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
    display: block;
    transition: all 0.5s ease-in-out;
  }

    &:hover {
      color: ${NAV_ANCHOR_HOVER};
      background: ${BACKGROUND_BLOGPOST_HOVER};
      padding: 20px 20px;
    }
`
