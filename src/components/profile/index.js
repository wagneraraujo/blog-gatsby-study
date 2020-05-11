import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => (
	<StaticQuery
		query={graphql`
			{
				site {
					siteMetadata {
						title
						description
						position
					}
				}
			}
		`}
		render={({
			site: {
				siteMetadata: { title, position, description }
			}
		}) => (
			<S.ProfileWrapper>
				<S.ProfileLink to="/about">
					<Avatar />
					<S.ProfileAuthor>{title}</S.ProfileAuthor>
					<S.ProfilePosition>
						{position}

						<S.ProfileDescription>
							{description}
						</S.ProfileDescription>
					</S.ProfilePosition>
				</S.ProfileLink>
			</S.ProfileWrapper>
		)}
	/>
)

export default Profile
