/* global graphql */

import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SMIcons from '../components/SMIcons'
import Link from '../components/Link'
import { NAV_ANCHOR, NAV_ANCHOR_HOVER } from '../lib/theme/colours'

export default function Blog ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <Nav />
      <div className='blog-post'>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div>
                <BlogPostPreview key={post.id}>
                  <BlogPostTitle>
                    <GatsbyLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </GatsbyLink>
                  </BlogPostTitle>
                  <BlogPostDate className='date'>
                    {post.frontmatter.date}
                  </BlogPostDate>
                  <BlogPostExcerpt>
                    {post.excerpt}
                  </BlogPostExcerpt>
                  <Link to={post.frontmatter.path}>Read more</Link>
                </BlogPostPreview>
              </div>
            )
          })}
      </div>
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
            date(formatString: "DD MMMM YYYY")
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

// const BlogPost =styled.div`
//
// `

const BlogPostPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0.25rem;
  border-bottom: 2px solid #EEE;
  margin: 0 auto;
`

const BlogPostTitle = styled.h1`
  a {
    color: ${NAV_ANCHOR};
    text-decoration: none;
  }

  a:hover {
    color: ${NAV_ANCHOR_HOVER};
  }
`

// TODO change font size
const BlogPostDate = styled.h2`
  color: ${NAV_ANCHOR};
  font-size: 1.3em;
  margin-bottom: 1rem;
`

const BlogPostExcerpt = styled.p`
  font-style: italic;
`
