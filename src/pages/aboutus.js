import React from 'react'
import style from "../styles/about.module.css"
import {Row, Col} from "react-bootstrap"


import Bestimg from "../images/about1.jpg"
import Aboutimg from "../images/aboutus.jpg"
import Whyimg from "../images/whychooseus.jpg"
import Meetimg from "../images/meetthefounder.jpg"



function About () {
    return(
        <div className={style.aboutContainer}>
            <div>
            <img src={Aboutimg} style={{width:"100%"}}alt=" " />
            </div>
            <div className={style.bestlawFirm}>
                <Row>
                    
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <h1>The Best Law Firm</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis leo amet, fames lacus, interdum gravida. Cursus lorem elementum feugiat congue. 
                            Egestas ac, quisque laoreet adipiscing risus, placerat. Nisl adipiscing at aliquet urna faucibus egestas nam in ut. Pretium, elit vulputate enim 
                            vitae quis odio aenean a. A lacus eu iaculis purus cras enim cursus. Lorem netus euismod amet augue. Eu id tempor scelerisque tortor viverra gravida
                            venenatis. Venenatis vulputate malesuada sed massa pharetra montes.
                        </p>
                    </Col>  
                    <Col sm={6} md={6} lg={6} xl={6}>
                    <img src={Bestimg} alt=" " />
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis leo amet, fames lacus, interdum gravida. Cursus lorem elementum feugiat congue. 
                            Egestas ac, quisque laoreet adipiscing risus, placerat. Nisl adipiscing at aliquet urna faucibus egestas nam in ut. Pretium, elit vulputate enim 

                        </p>
                    </Col>
                
                </Row>
            </div>
           
            
            <div className={style.whychooseUs}>
                <Row>
                    <Col sm={6} md={6} lg={6} xl={6}>
                    <img src={Whyimg} alt=" " />
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <h1>Why choose Us?</h1>
                        <div>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                <h3>Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <h3>Trust</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                            </Row>
                            
                        </div>
                        <div>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                <h3>Transparency</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <h3>Affordable</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                            </Row>
                            
                        </div>

                        
                    </Col>
                </Row>
            </div>
            <div className={style.meetheFounder}>
                <Row>
                    
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <h1>Meet the Founder</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis leo amet, fames lacus, interdum gravida. Cursus lorem elementum feugiat congue. 
                            Egestas ac, quisque laoreet adipiscing risus, placerat. Nisl adipiscing at aliquet urna faucibus egestas nam in ut. Pretium, elit vulputate enim 
                            vitae quis odio aenean a. A lacus eu iaculis purus cras enim cursus. Lorem netus euismod amet augue. Eu id tempor scelerisque tortor viverra gravida
                            venenatis. Venenatis vulputate malesuada sed massa pharetra montes.
                        </p>
                        <button>Abudlahi's Bio</button>
                    </Col>  
                    <Col sm={6} md={6} lg={6} xl={6}>
                    <img src={Meetimg} alt=" " />
                    
                    </Col>
                </Row>
            </div>
            <div className={style.needHelp}>
                <Row>
                    <Col sm={6} md={6} lg={4} xl={4}>
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>Lorem ipsum dolor sit amet </p>
                    </Col>
                    <Col sm={6} md={6} lg={4} xl={4}>
                    <h1>Need Help?</h1>
                    </Col>
                    <Col sm={6} md={6} lg={4} xl={4}>
                    <button>Consultation</button>
                    </Col>

                </Row>
            </div>


        </div>
    )



}

export default About;


