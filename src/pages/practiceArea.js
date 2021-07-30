import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom"
import { Litigation, Aviation, Labour, Insurance, Foreign, Intellectual, Telecomms, Taxation } from '../data/practiceAreaHome'
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"



const Section = styled.section `
    background: #fff;

    @media screen and (min-width: 1025px) {
        margin: 10em 7em;
    }
    
`

const Wrapper = styled.div `
    background: #E5E5E5;

    img {
        width: 100%;
    }

    div:last-child {
        padding: 3em;
    }

    p {
        line-height: 2;
        font-size: clamp(.8em, 6vw, 1em);
    }

    @media screen and (max-width: 768px) {
        img {
            height: 100px;
        }
    }
`

const PracticeArea = () => {
    const location = useLocation();

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    if(location.pathname === '/litigation') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Litigation.image} alt="" data-aos="zoom-in-right" data-aos-once="true" />
                    </div>
                    <div>
                        <p data-aos="fade-left" data-aos-once="true" >{Litigation.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true" >{Litigation.paragraphTwo}</p>
                        <p data-aos="fade-left" data-aos-once="true" >{Litigation.paragraphThree}</p>
                        <p data-aos="fade-right" data-aos-once="true" > {Litigation.paragraphFour}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    
    if(location.pathname === '/aviation') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Aviation.image} alt="" />
                    </div>
                    <div>
                        <p>{Aviation.paragraphOne}</p>
                        <p>{Aviation.paragraphTwo}</p>
                        <p>{Aviation.paragraphThree}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/labour_law') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Labour.image} alt="" />
                    </div>
                    <div>
                        <p>{Labour.paragraphOne}</p>
                        <p>{Labour.paragraphTwo}</p>
                        <p>{Labour.paragraphThree}</p>
                        <p>{Labour.paragraphFour}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/insurance') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Insurance.image} alt="" />
                    </div>
                    <div>
                        <p>{Insurance.paragraphOne}</p>
                        <p>{Insurance.paragraphTwo}</p>
                        <p>{Insurance.paragraphThree}</p>
                        <p>{Insurance.paragraphFour}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    
    if(location.pathname === '/foreign_investments') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Foreign.image} alt="" />
                    </div>
                    <div>
                        <p>{Foreign.paragraphOne}</p>
                        <p>{Foreign.paragraphTwo}</p>
                        <p>{Foreign.paragraphThree}</p>
                        <ul>
                            <li>{Foreign.pointOne}</li>
                            <li>{Foreign.pointTwo}</li>
                            <li>{Foreign.pointThree}</li>
                            <li>{Foreign.pointFour}</li>
                            <li>{Foreign.pointFive}</li>
                        </ul>
                        <p>{Foreign.paragraphFour}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/intellectualproperty') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Intellectual.image} alt="" />
                    </div>
                    <div>
                        <p>{Intellectual.paragraphOne}</p>
                        <p>{Intellectual.paragraphTwo}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/taxation') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Taxation.image} alt="" />
                    </div>
                    <div>
                        <p>{Taxation.paragraphOne}</p>
                        <p>{Taxation.paragraphTwo}</p>
                        <p>{Taxation.paragraphThree}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/telecommunication_law"') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Telecomms.image} alt="" />
                    </div>
                    <div>
                        <p>{Telecomms.paragraphOne}</p>
                        <p>{Telecomms.paragraphTwo}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    
    
    return (
        <Section>
            <Wrapper>
                <div>
                    <img src={Aviation.image} alt="" />
                </div>
                <div>
                    <p>{Aviation.paragraphOne}</p>
                    <p>{Aviation.paragraphTwo}</p>
                    <p>{Aviation.paragraphThree}</p>
                </div>
            </Wrapper>
    </Section>
    )
}

export default PracticeArea
