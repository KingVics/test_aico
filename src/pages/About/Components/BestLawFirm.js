import React from "react"
import {Row, Col} from "react-bootstrap"
import LazyLoad from 'react-lazyload';
import style from "../../../styles/about.module.css"

import Bestimg from "../../../images/com/about1.jpg"

const BestLawFirm = () => {
    return (
        <div className={style.bestlawFirm}>
            <h2>The Best Law Firm</h2>
            <Row>
                <Col md={6} lg={6} xl={6}>
                    <p>
                        At AICO, we pride ourselves in our deep understanding of the law and experience in key industry sectors. The Firm is a full sector focused service law firm which provides its clients with world class legal services delivered with very high ethical standards. We have earned a reputation for delivering excellent services which can compete at international levels.
                        We deliver solution driven services, and work in partnership with our clients to understand their needs and provide lasting solutions. Our vast knowledge in several sectors of law gives us an edge over our contemporaries. With four (4) of our partners being Senior Advocates of Nigeria, we have attained enviable professional heights in the legal profession. Our staff are well trained and work with the highest form of integrity and professionalism.
                    </p>
                    <p>
                        The Firm, Abdullahi Ibrahim & Co, has at its core the values of integrity and success, driven by honesty, professionalism, research and innovative approach to legal practice. The Firm has strong interests in advisory and advocacy services whilst boasting of seasoned and celebrated legal minds in the industry, and some of the best in modern commercial law practice including, Public Administrative Law, Alternative Dispute Resolution, Probate and Succession, Marine, Oil & Gas, Aviation, Stock Exchange, Telecommunications, Entertainment Law, Sports Law, Admiralty Law and Property Law.
                    </p>
                    <p>
                        The Firm has in its pool, seasoned practitioners and advocates who are well versed and specialized in different areas of legal practice. As a Firm that has fully embraced the dynamics of the 21st century practice, the Firm deploys technology and technological innovations as they emerge in its operations and management of its business. Aware that the 21st century practice must be ready to deliver on schedule and must be result oriented, the firm has zero tolerance for delays, procrastination, indecision and poor attitude to work. Staff of the Firm are constantly exposed to developments in the industry and best practices of international standard. The Firm strives within the legal compass to deliver its values of service, integrity and professionalism.
                    </p>
                </Col>  
                <Col md={6} lg={6} xl={6}>
                    <LazyLoad offset={100} height="100%" style={{height: "100%"}}>
                        <img src={Bestimg} alt=" " />
                    </LazyLoad>
                </Col>
                <p className={style.bestlawFirmP}>
                    Today, the Firm is one of the top ranked law firms in the country with a reputation for integrity, client satisfaction and positive delivery. Its human resources are top notched with four sitting Senior Advocates of Nigeria [SAN] who amongst them have more than 80 years of combined active legal practice. Located right in the heart of the commercial nerve center of the country [Lagos], with an office in the Federal Capital Territory [Abuja] as well as an office in the Capital of the former Northern Region [Kaduna], the Firm is not just well equipped with the human resources to deliver the best legal services to all persons, it is also strategically located to serve all its clients.
                </p>
            </Row>
        </div>
    )
}

export default BestLawFirm
