import React from 'react'
import {Row, Col, Tab, Nav} from "react-bootstrap"
import {FiTwitter, BsEnvelope, FiLinkedin, FiFacebook} from "react-icons/all"
import styled, {css} from "styled-components/macro"
import styles from "../../styles/profile.module.css"

import {Partner} from "../../data/partner"

const SvgStyle = css `
    color: #fff;
    margin: 0 10px;
`

const Para = styled.p `
    line-height: 2;
`

const Facebook = styled(FiFacebook) `
    ${SvgStyle}
`
const LinkedIn = styled(FiLinkedin) `
    ${SvgStyle}
`
const Twitter = styled(FiTwitter) `
    ${SvgStyle}
`
const Envelope = styled(BsEnvelope) `
    ${SvgStyle}
`

const ImageWrapper = styled.div `
    position: relative;
    left: 105px;
    top: 65px;

    @media screen and (max-width: 1100px) {
        position: static;
    }
`
export default function Profile(props) {

    // const data = JSON.parse(localStorage.getItem('profile'))

    return (
        <section className={styles.profileSection}>
            {Partner.map((item, index) => {
                return (
                    <>
                    <div className={styles.profileHeader}>
                        <ImageWrapper>
                            <img src={item.image} alt="" />
                        </ImageWrapper>
                        <div className={styles.profileAddres}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.role}</p>
                                <p>
                                    Email: {item.email}
                                </p>
                                <p>Phone: {item.phone}</p>
                                <p>Locations: {item.location}</p>
                            </div>
                            <div className={styles.profileSocials}>
                                <p >Share</p>
                                <Envelope />
                                <LinkedIn />
                                <Facebook />
                                <Twitter />
                            </div>
                        </div>
                    </div>
                    <div className={styles.profileBio}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Biography</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Practice Areas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Admissions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Publications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        <Para>
                                            {item.bioOne}
                                        </Para>
                                        <Para>
                                            {item.bioTwo}
                                        </Para>
                                        <Para>
                                            {item.bioTwo}
                                        </Para>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <Para>
                                            {item.bioOne}
                                        </Para>
                                        
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                        <Para>
                                            {item.bioOne}
                                        </Para>
                                        
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div>
                                        <Para>
                                            {item.bioOne}
                                        </Para>
                                        
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <div>
                                        <p>
                                            {item.bioOne}
                                        </p>
                                        
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            </>
                )
            })}
            
            
        </section>
    )
}
