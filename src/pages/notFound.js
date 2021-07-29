import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import Image from "../images/notfound.png"



const Section = styled.section `
    position: relative;
    height: 100vh;
    background-image: url(${Image});
    margin-top: 7em;
    
`

const Layer = styled.div `
    background: rgba(51, 51, 51, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 7rem;
`

const Page = styled.div `
    h1 {
        color: #fff;
        font-weight: 600;
    }

    P {
        width: 100%;
        color: #fff;
        margin: 0 0 2em;
    }

    @media screen and (min-width:700px) {
        h1 {
            font-size: 8em !important;
        }

        P {
            width: 54%;
            color: #fff;
            font-size: 1.2em;
            margin: 0 0 2em;
        }
    }


`

const Btn = styled(Link) `
    background: rgba(17, 19, 83, 0.7);
    border-radius: 7.37742px;
    color: #fff;
    padding: 15px;
    text-transform: uppercase;

    &:hover {
        color: #fff;
    }

`

export default function NotFound(props) {
    return (
        <Section>
            <Layer>
                {props.title ? <h1>404 No {props.title} Found</h1> 
                
                
                : 
                    <Page>
                        <h1>404</h1>
                        <p>Sorry, we can not  find the page you are looking for. Try again later
                        </p>
                        
                        <Btn to="/">back to home</Btn>
                    </Page> 
                }
            </Layer>
        </Section>
    )
}
