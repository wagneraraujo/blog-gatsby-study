import React from "react"
import links from "./content.js"

import * as S from "./styled.js"
const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksLink>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksLink>
  </S.MenuLinksWrapper>
)

export default MenuLinks
