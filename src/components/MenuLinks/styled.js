import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``
export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 100;
`
export const MenuLinksItem = styled.li`
  padding: 5px;
  list-style: none;
  .active {
    color: #abeafe;
  }
`
export const MenuLinksLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  &:hover {
    color: #205378;
  }
`
