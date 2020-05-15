import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h2>{post.frontmatter.title}</h2>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost
