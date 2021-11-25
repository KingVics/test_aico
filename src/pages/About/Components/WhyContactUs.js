import React from "react";
import {Row, Col} from "react-bootstrap"
import style from "../../../styles/about.module.css"


const WhyContactUs = () => {
    return (
        <div className={style.whychooseUs}>
            <Row>
                <Col xl={12} className={style.whyCol}>
                    <h2>Why Contact Us?</h2>
                    <div>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <h3>Our Integrity and Professionalism</h3>
                                <p>
                                    We pride ourselves as professionals with high integrity. Our conduct, interactions with and handling of client's instructions are guided by utmost and strict adherence to ethical rules and international standards of best practices. We do not compromise on integrity and professionalism.
                                </p>
                            </Col>
                            <Col  sm={6} md={6} lg={6} xl={6}>
                                <h3>Our Experience and Positive Results</h3>
                                <p>
                                We have experienced and expert practitioners in diverse fields of law who have attained the highest rank in legal practice and who have practiced [and continue to practice] and collaborated with some of the best in the legal profession both within and outside the shores of the country. With our experience and vast knowledge and appreciation of the law come overwhelming positive results for our clients.
                                </p>
                            </Col>
                        </Row>
                        <Row className={style.founderRow}>
                            <Col  sm={6} md={6} lg={6} xl={6}>
                                <h3>Our Resources and Reach</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                            </Col>
                            <Col  sm={6} md={6} lg={6} xl={6}>
                                <h3>Trust and Confidentiality</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                            </Col>
                        </Row>   
                    </div>
                </Col>  
            </Row>
        </div>
    )
}

export default WhyContactUs
