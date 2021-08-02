import React from 'react'
import  {Link} from "react-router-dom"
import styled, {css} from "styled-components/macro"
import {FaFacebookF, FaTwitter, FaLinkedin} from "react-icons/fa"

import {PubData} from "../data/publication"
// import "./blogDescription.css"
// import Blog from "../../../asset/png/blog.png"



const Section = styled.section `
    background: #fff;
`
const Wrapper  =  styled.div `
`

const Icon  = css `
    font-size: 30px;
    border-radius: 20px;
    border: 1px solid #C4C4C4;
    padding: 5px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        margin-right: 20px;
    }
`

const SvgLink =  styled(Link)  `
    color: #000;

    &:hover {
        color: #000;
    }
`

const Header = styled.div `
    margin-top: 8em;;
    text-align: center;

    h1 {
        font-size: 1.8rem;
        width: 40%;
        margin: 0 auto .8rem;
    }

    p{
        color: rgba(90, 83, 83, 0.89);
        font-size:  1.1rem;
    }

    p:last-child {
        color: #A59F9F;
        font-size: clamp(.6rem, 8vw, .9rem);
    }

    @media screen and (max-width:768px) {
        h1 {
            font-size: 1.4rem !important;
            width: 100%;
        }
        p {
            font-size: large.85rem;
        }
        p:last-child {
            font-size: .6rem;
        }
    }
`

const ImageWrapper = styled.div ``

const Image = styled.img `
    width: 100%;
`

const ContentWrapper = styled.div `
    display: flex;
    margin: 5rem 4rem;

    @media screen and (max-width: 768px) {
        display: block;
        margin: 1rem;
    }
`

const Content = styled.div `
    h2 {   
        font-size: clamp(1.2rem, 8vw, 1.4rem);
    }

    p {
        line-height: 2;
    }

    li {
        line-height: 2;
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 1.2rem;
        }
        p {
            line-height: 1.5;
            font-size: 12px;
        }    
    }
`

const ContentSvg = styled.div`
    margin-left: 1rem;
`


const Facebook = styled(FaFacebookF) `
    ${Icon}
`
const Twitter = styled(FaTwitter) `
    ${Icon}
`
const LinkedIn = styled(FaLinkedin) `
    ${Icon}
`


const Publication = () => {
    
    return (
        <Section>
            <Wrapper>
                <Header>
                    <h1>Becoming</h1>
                    <p>Published 18th July,2021</p>
                </Header>
                <ImageWrapper>
                    <Image src={PubData.image} alt="" />
                </ImageWrapper>
                <ContentWrapper>
                    <Content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sodales purus sed commodo.
                            pulvinar porttitor elit, at commodo erat fringilla quis. Fusce turpis lacus, tristique nec sem sit amet, tincidunt laoreet nibh. 
                            Duis fermentum blandit mi ac rutrum. Nullam malesuada venenatis nunc sed dignissim. 
                            Nam vel pulvinar arcu, ultricies pellentesque nulla. Curabitur quis iaculis leo. 
                            Vivamus a rhoncus velit, quis euismod lectus. Pellentesque sit amet orci arcu.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sodales purus sed commodo. Duis pulvinar porttitor elit, at commodo erat fringilla quis. Fusce turpis lacus, tristique nec sem sit amet, tincidunt laoreet nibh. Duis fermentum blandit mi ac rutrum. Nullam malesuada venenatis nunc sed dignissim. Nam vel pulvinar arcu, ultricies pellentesque nulla. 
                            Curabitur quis iaculis leo. Vivamus a rhoncus velit, quis euismod lectus. Pellentesque sit amet orci arcu.

                        </p>
                        <p>This, we also help curb incessant numbers of fraudulent activities in by Lagos real estate agents.</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sodales purus sed commodo. Duis pulvinar porttitor elit, at commodo erat fringilla quis. Fusce turpis lacus, tristique nec sem sit amet, tincidunt laoreet nibh. Duis fermentum blandit mi ac rutrum. Nullam malesuada venenatis nunc sed dignissim. Nam vel pulvinar arcu, ultricies pellentesque nulla. Curabitur quis iaculis leo. Vivamus a rhoncus velit, quis euismod lectus. Pellentesque sit amet orci arcu.
                        </p>

                    </Content>
                    <ContentSvg>
                        <SvgLink to="#">
                            <Facebook />
                        </SvgLink>
                        <SvgLink to="#">
                            <Twitter />
                        </SvgLink>
                        <SvgLink to="#">
                            <LinkedIn />
                        </SvgLink>
                    </ContentSvg>
                </ContentWrapper>
                
            </Wrapper>
        </Section>
    )
}

export default Publication;
