/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
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

//criar paginas
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              category
              background
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),

        //me permite passar qualquer dado para dentro desse contexto
        context: {
          slug: node.fields.slug
        }
      })
    })

    const postPerPage = 2

    //ceil -> a conta ele sempre arredonda pro maior numero
    const numPages = Math.ceil(post.lenght / postPerPage)

    //criar um array com o nymeor de págians que vou ter
    Array.from({lenght: numPages}).forEach((_, index) => {
      createPage({
        path: index === 0 `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context:{
          limit:postPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}
