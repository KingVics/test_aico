import styled from "styled-components"
import {Link} from "react-router-dom"

export const Button  = styled(Link) `
    margin: 0 2em;
    color: #333;
    text-transform: uppercase;
    background-color: ${({active}) => (active ? '#7578B8': '')};
    padding: 11px 25px;
    border-radius: 3px;

    &:hover {
        background-color: ${({active}) => (active ? 'var(--buttonColor)': '')};
        color: #333 !important;
    }

    @media screen and (max-width: 700px) {
        display: block;
        padding: 7px;
        text-transform: capitalize;
        font-size: 12px;
    }
`


