import React, {useEffect} from 'react'
import {Row, Col} from "react-bootstrap"
import style from "../../styles/home.module.css"
import About from "../../../src/images/about.jpg"
import LazyLoad from 'react-lazyload';
import Aos from "aos"
import "aos/dist/aos.css"

import 'react-multi-carousel/lib/styles.css';


//Component
import Carousel from "../../components/carousel"
import CardSlider from "../../components/cardSlider"


//Images
import CounselOne from "../../images/com/counsel1.png"
import CounselTwo from "../../images/com/counsel2.png"
import CounselThree from "../../images/com/counsel3.png"

export default function Home(props) {
    useEffect(() => {
        Aos.init({duration: 3000})
    },[])
    

    return (
        <div className={style.homeContainer} id="back-to-top-anchor" >
            <div >
                <Carousel />
            </div>
            <div className={style.aboutAbu}>
                <Col xl={12}>
                    <Row>
                        <Col md={6} lg={6} xl={6} className={style.aboutCol}>
                            <div>
                                <h2>About Abdullahi Ibrahim & Co</h2>
                                <p>
                                    At AICO, we pride ourselves in our deep understanding of the law and experience in key industry sectors. The Firm is a full sector focused service law firm which provides its clients with world class legal services delivered with very high ethical standards. We have earned a reputation for delivering excellent services which can compete at international levels.
                                </p>
                                <p>
                                    We deliver solution driven services, and work in partnership with our clients to understand their needs and provide lasting solutions. Our vast knowledge in several sectors of law gives us an edge over our contemporaries. With four (4) of our partners being Senior Advocates of Nigeria, we have attained enviable professional heights in the legal profession. Our staff are well trained and work with the highest form of integrity and professionalism.
                                </p>
                                <p>
                                    The Firm, Abdullahi Ibrahim & Co, has at its core the values of integrity and success, driven by honesty, professionalism, research and innovative approach to legal practice. The Firm has strong interests in advisory and advocacy services whilst boasting of seasoned and celebrated legal minds in the industry, and some of the best in modern commercial law practice including, Public Administrative Law, Alternative Dispute Resolution, Probate and Succession, Marine, Oil & Gas, Aviation, Stock Exchange, Telecommunications, Entertainment Law, Sports Law, Admiralty Law and Property Law.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={6}>
                            <div style={{height: "100%"}}>
                                <img src={About} alt="" />
                            </div>
                        </Col>
                    </Row>    
                </Col>
            </div>
            <div className={style.practiceBrief}>
                <h2>Our Practice Area</h2>
                <CardSlider />
            </div>
            <div className={style.ourPhilosophy}>
                <div className={style.ourPhilosophyContent}>
                    <h2>Our Philosophy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tortor ut adipiscing tellus elementum lobortis. Risus iaculis ultrices id et rutrum feugiat. 
                        Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                        Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                        Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                    </p>
                </div>
            </div>
            <div className={style.meetCounselBrief}>
                <div>
                    <h2>Meet Our Counsels</h2>
                </div>
                <Row className={style.meetCounselBriefImg}> 
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <LazyLoad height="100%">
                                    <img src={CounselOne} alt="" />
                                </LazyLoad>
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Adetunji Oyeyipo</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <LazyLoad height="100%">
                                    <img src={CounselTwo} alt="" />
                                </LazyLoad>
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Olabisi Soyebo</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <LazyLoad height="100%">
                                    <img src={CounselThree} alt="" />
                                </LazyLoad>
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Rotimi Oguneso</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>       
        </div>
    )
}
