import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
const IndexPage = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		query PostList {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							description
							date(
								formatString: "DD [de] MMMM [de] YYYY"
								locale: "pt-br"
							)
							category
							background
						}
						timeToRead
					}
				}
			}
		}
	`)

	const postList = allMarkdownRemark.edges
	return (
		<Layout>
			<SEO title="Home" />
			{postList.map(
				({
					node: {
						frontmatter: {
							background,
							category,
							date,
							title,
							description
						},
						timeToRead,
						fields: { slug }
					}
				}) => (
					<PostItem
						slug={slug}
						background={background}
						category={category}
						date={date}
						timeToRead="5"
						title={title}
						description={description}
					/>
				)
			)}
		</Layout>
	)
}

export default IndexPage
