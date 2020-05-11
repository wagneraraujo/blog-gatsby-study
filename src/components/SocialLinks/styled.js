import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 10px auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #205378;
  text-decoration: none;

  &:hover {
    color: #5b90ab;
  }
`
export const IconWrapper = styled.div`
  fill: #1a2f47;
  width: 25px;
  height: 25px;
`
