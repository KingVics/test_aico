import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import styles from "../styles/news.module.css"


import {Publication} from "../data/publication"
import SelectInput from '../components/selectInput'

const Section = styled.section `
    background: #fff;
`

const Wrapper = styled.div `
    padding: 7rem 0 0;
    margin: 0 2rem;

    @media screen and (min-width: 1101px) { 
        margin: 0 7rem;
        
    }
`

const Btn = styled(Link) `
    margin: 0 2em;
    color: #333;
    text-transform: uppercase;
    background-color: transparent;
    padding: 11px 25px;
    border-radius: 3px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Links = styled(Link) `
    color: #333;
    text-decoration: underline !important;
    position: absolute;
    bottom: 0;

    @media screen and (max-width:1100px) {
        bottom: -33px;
    }
`

const BtnWrap = styled.div `
    margin: 0;
    
    @media screen and (min-width: 501px) {
        margin: 5em 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            display: none;
        }
    }

    @media screen and (max-width:500px) {
        div {
            
        }
    }
`

const ContentWrapper = styled.div `

    margin-top: 3em;

    h1 {
        color: var(--textColor);
        font-weight: 600;
        margin: 0;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 22px !important;
        }   
    }

`

const NewsContent = styled.div `
    position: relative;
    margin: 3em 0 8em;

    h2 {
        width: 100%;
        font-weight: 600;
        margin: 20px 0;
    }

    p {
        line-height: 2;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        h2{
            font-size: 1.2em !important;
        }

        p {
            font-size: 12px;
        }
    }
    @media screen and (min-width: 1101px) {
        margin: 3em 0 4em;
        h2 {
            width: 40%;
        }

        p {
            width: 90%;
        }
    }
    
`

const Blog = styled.div `
    
    div:last-child {
        text-align: center;
    }

    div:last-child img {
        width: 60%;
    }
    @media screen and (min-width: 1101px) {
        display: flex;
        div:last-child {
            text-align: initial;
        }

        div:last-child img {
            width: inherit;
        }
    }

    @media screen and (max-width: 768px) {
        div:last-child img {
            width: 100%;
        }
    }

`

const NewsContainer = styled.div `
    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Mobile = styled.div `
    @media screen and (min-width: 501px) {
        display: none;
    }
`


const News = ({active, activeP, showPublication, showNew, formData, setFormData}) => {
    const [show, setShow] = useState(false)
    const [mobile] = useState(formData.event)
    const [ids, setId] = useState()
    
    console.log(active);
    const handleShowNews = (id) => {
        const newA = Publication?.find(i => i.id === id)
        setId(newA)
        if(newA?.id === id) {
            setShow(true) 
        }
        if (show && newA?.id === id) {
            setShow(false)
        }

    }
    console.log(mobile);
    return (
        <Section>
            <Wrapper>
                <BtnWrap>
                    <Btn className={active && `${styles.Active}`} onClick={() => showNew()}>News</Btn>
                    <Btn className={activeP && `${styles.Active}`} onClick={() => showPublication()}>Publications</Btn>
                    <div>
                        <SelectInput  
                            element="select" 
                            value={formData.event}
                            onChange={(e) => setFormData({...formData, event: e.target.value})}
                            name="event"
                            
                        >
                            <option value="news" defaultValue>News</option>
                            <option value="publication" >Publication</option>
                        </SelectInput>
                    </div>
                </BtnWrap>
                {/* MOBILE VIEW */}
                <Mobile>
                {mobile === 'news' ? 
                    <ContentWrapper>
                    <h1>News</h1>
                    {
                        Publication.map((item, index) => {
                            return (
        
                                <NewsContent key={item.id}>
                                    <h2>{item.title}</h2>
                                    <Blog>
                                        <div>
                                            <p>{item.paraOne}</p>
                                            <p>{item.paraTwo}</p>
                                            <p>{item.paraThree} </p>
                                            {show === true && ids?.id === item.id ?
                                                <p>{item.paraFour}</p>
                                                : ""
                                            }
                                            <Links to="#" onClick={() => handleShowNews(item.id)}>{show === true ? 'Read Less' : 'Read More'}</Links>
                                        </div>
                                        <div>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Blog>
                                </NewsContent>
                            )
                        } )
                    }
                    </ContentWrapper>
                        
                : 
                <ContentWrapper>
                <h1>Publications</h1>
                {
                    Publication.map((item, index) => {
                        return (
    
                            <NewsContent key={item.id}>
                                <h2>{item.title}</h2>
                                <Blog style={{display: "flex"}}>
                                    <div>
                                        <p>{item.paraOne}</p>
                                        <p>{item.paraTwo}</p>
                                        <p>{item.paraThree} </p>
                                        {show === true && ids?.id === item.id ?
                                            <p>{item.paraFour}</p>
                                            : ""
                                        }
                                        <Links to="#" onClick={() => handleShowNews(item.id)}>Read More</Links>
                                    </div>
                                    <div>
                                        <img src={item.image} alt="" />
                                    </div>
                                </Blog>
                            </NewsContent>
                        )
                    } )
                }
                </ContentWrapper>
                
                }

                </Mobile>
                
                {/* DESKTOP VIEW */}
                <NewsContainer>
                    {active && 
                        <ContentWrapper>
                        <h1>News</h1>
                        {
                            Publication.map((item, index) => {
                                return (
            
                                    <NewsContent key={item.id}>
                                        <h2>{item.title}</h2>
                                        <Blog>
                                            <div>
                                                <p>{item.paraOne}</p>
                                                <p>{item.paraTwo}</p>
                                                <p>{item.paraThree} </p>
                                                {show === true && ids?.id === item.id ?
                                                    <p>{item.paraFour}</p>
                                                    : ""
                                                }
                                                <Links to="#" onClick={() => handleShowNews(item.id)}>{show === true ? 'Read Less' : 'Read More'}</Links>
                                            </div>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </Blog>
                                    </NewsContent>
                                )
                            } )
                        }
                        </ContentWrapper>
                    }
                </NewsContainer>
                <NewsContainer>
                    {activeP && 
                        <ContentWrapper>
                        <h1>Publications</h1>
                        {
                            Publication.map((item, index) => {
                                return (
            
                                    <NewsContent key={item.id}>
                                        <h2>{item.title}</h2>
                                        <Blog style={{display: "flex"}}>
                                            <div>
                                                <p>{item.paraOne}</p>
                                                <p>{item.paraTwo}</p>
                                                <p>{item.paraThree} </p>
                                                {show === true && ids?.id === item.id ?
                                                    <p>{item.paraFour}</p>
                                                    : ""
                                                }
                                                <Links to="#" onClick={() => handleShowNews(item.id)}>Read More</Links>
                                            </div>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </Blog>
                                    </NewsContent>
                                )
                            } )
                        }
                        </ContentWrapper>
                    }

                </NewsContainer>
                {/* END OF DESKTOP VIEW */}
            </Wrapper>
        </Section>
    )
}

export default News