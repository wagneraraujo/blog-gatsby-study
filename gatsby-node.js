/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

//adicionar slug para cada um dos posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    //criando o campo dentro de cada no
    createNodeField({
      node,
      name: `slug`,
      //slug retornando sem a data, usando o slice
      value: `/${slug.slice(12)}`
    })
  }
}
