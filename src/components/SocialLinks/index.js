import React from "react"
import * as S from "./styled.js"
import Icons from "./icons.js"
import Links from "./content.js"

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {Links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_Blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
