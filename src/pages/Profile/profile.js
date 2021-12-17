import React, {useEffect} from 'react'
import { useSelector } from "react-redux"
import {Row, Col, Tab, Nav} from "react-bootstrap"
import {FiTwitter, BsEnvelope, FiLinkedin, FiFacebook} from "react-icons/all"
import styled, {css} from "styled-components/macro"
import styles from "../../styles/profile.module.css"
import Loader from "../../components/loader"
import Aos from "aos"
import ErrorBoundary from "../../components/ErrorBoundary"
import "aos/dist/aos.css"



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
    const {isLoading, data} = useSelector((state) => state.profile)


    useEffect(() => {
        Aos.init({duration: 3000})
    },[])



    if(isLoading) return <Loader />


    return (
        <ErrorBoundary>
        <section className={styles.profileSection}>
            {!data  ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <h2>Something went wrong.</h2>
                </div>
            ) : 
            data.map((item, index) => {
                return (
                    <>
                        <div className={styles.profileHeader} key={index}>
                            <ImageWrapper>
                                <img src={item?.picture} alt=""   data-aos="zoom-in-right"/>
                            </ImageWrapper>
                            <div className={styles.profileAddres}>
                                <div>
                                    <h2>{item?.firstname} {item?.lastname}{item?.title1 || item?.title2 ? ",": ''} {item?.title1 ? `${item?.title1}., ` : ''} {item?.title2 ? `${item?.title2}` : ''}</h2>
                                    <p>{item?.role}</p>
                                    <p>
                                        {item?.email ? ` Email: ${item?.email}` : ''}
                                    </p>
                                    <p>{item?.phone ? `Phone: ${item?.phone}` : ""}</p>
                                    <p>{item?.office_location ? `Location: ${item.office_location}` : ""}</p>
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
                                        <Nav.Link eventKey="second">Education</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Highlights</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div data-aos="slide-left" >
                                            <Para>
                                                {item?.biography}
                                            </Para>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div data-aos="slide-left" >
                                            <Para>
                                                {item?.education}
                                            </Para>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div data-aos="slide-left" >
                                            <Para>
                                                {item?.highlights?.split(".")[1] && item.highlights?.split(".")[1]}
                                            </Para>
                                            <Para>
                                                {item?.highlights?.split(".")[3] && item.highlights?.split(".")[3]}
                                            </Para>
                                            <Para>
                                                {item?.highlights?.split(".")[5] && item.highlights?.split(".")[5]}
                                            </Para>
                                            <Para>
                                                {item?.highlights?.split(".")[7] && item.highlights?.split(".")[7]}
                                            </Para>
                                            
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
        </ErrorBoundary>
    )
}
