import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
    color: #44546a;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: #bad5ed;
    text-decoration: none;

    &:hover {
        color: #abeafe;
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.4em;
    margin: 10px;
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.1em;
`

export const ProfileDescription = styled.p`
    font-size: 1rem;
`
