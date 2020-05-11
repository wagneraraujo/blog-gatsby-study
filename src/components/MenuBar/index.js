import React from "react"
import * as S from "./styled.js"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { ChevronsUp } from "@styled-icons/boxicons-solid/ChevronsUp"
import { Flashlight } from "@styled-icons/entypo/Flashlight"
import { GridAlt } from "@styled-icons/boxicons-solid/GridAlt"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Flashlight />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <GridAlt />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o Topo">
        <ChevronsUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
