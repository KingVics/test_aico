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
                        <p data-aos="fade-left" data-aos-once="true" >{Aviation.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Aviation.paragraphTwo}</p>
                        <p  data-aos="fade-left" data-aos-once="true">{Aviation.paragraphThree}</p>
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
                        <p  data-aos="fade-left" data-aos-once="true">{Labour.paragraphOne}</p>
                        <p  data-aos="fade-right" data-aos-once="true">{Labour.paragraphTwo}</p>
                        <p  data-aos="fade-left" data-aos-once="true">{Labour.paragraphThree}</p>
                        <p  data-aos="fade-right" data-aos-once="true">{Labour.paragraphFour}</p>
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
                        <p data-aos="fade-left" data-aos-once="true">{Insurance.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Insurance.paragraphTwo}</p>
                        <p data-aos="fade-left" data-aos-once="true">{Insurance.paragraphThree}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Insurance.paragraphFour}</p>
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
                        <p  data-aos="fade-left" data-aos-once="true">{Foreign.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Foreign.paragraphTwo}</p>
                        <p data-aos="fade-left" data-aos-once="true">{Foreign.paragraphThree}</p>
                        <ul data-aos="fade-right" data-aos-once="true">
                            <li>{Foreign.pointOne}</li>
                            <li>{Foreign.pointTwo}</li>
                            <li>{Foreign.pointThree}</li>
                            <li>{Foreign.pointFour}</li>
                            <li>{Foreign.pointFive}</li>
                        </ul>
                        <p data-aos="fade-left" data-aos-once="true">{Foreign.paragraphFour}</p>
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
                        <p data-aos="fade-left" data-aos-once="true">{Intellectual.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Intellectual.paragraphTwo}</p>
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
                        <p data-aos="fade-left" data-aos-once="true">{Taxation.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Taxation.paragraphTwo}</p>
                        <p data-aos="fade-left" data-aos-once="true">{Taxation.paragraphThree}</p>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    if(location.pathname === '/telecommunication_law') {
        return (
            <Section>
                <Wrapper>
                    <div>
                        <img src={Telecomms.image} alt="" />
                    </div>
                    <div>
                        <p data-aos="fade-left" data-aos-once="true">{Telecomms.paragraphOne}</p>
                        <p data-aos="fade-right" data-aos-once="true">{Telecomms.paragraphTwo}</p>
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
                    <p data-aos="fade-left" data-aos-once="true">{Aviation.paragraphOne}</p>
                    <p data-aos="fade-right" data-aos-once="true">{Aviation.paragraphTwo}</p>
                    <p data-aos="fade-left" data-aos-once="true">{Aviation.paragraphThree}</p>
                </div>
            </Wrapper>
    </Section>
    )
}

export default PracticeArea
