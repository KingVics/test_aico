import React from "react";
import {Row, Col} from "react-bootstrap"
import LazyLoad from 'react-lazyload';
import style from "../../../styles/about.module.css"

import Meetimg from "../../../images/found.svg"

const MeetTheFounder = ({setShow}) => {
    return (
        <div className={style.meetheFounder}>
            <Row>
                <Col xl={4}>
                    <LazyLoad height={200} offset={100}>
                        <img src={Meetimg} alt=" " className={style.largefounderimg}/>
                    </LazyLoad>
                </Col>
                <Col  xl={8} className={style.founderCol}>
                    <h2>Meet the Founder</h2>
                    <p>
                        Alhaji Abdullahi Ibrahim, CON, SAN was called to the English Bar in 1963. He practiced in chambers in England before returning to Nigeria where he was called to the Nigerian Bar in 1964. He served at various times as Legal Adviser and Senior State Counsel in the defunct Northern Region of Nigeria. He entered private practice in 1973 as Managing Partner of Abdullahi Ibrahim and Company. 
                        Alhaji Ibrahim was a Legal Adviser and later Chairman of New Nigeria Development Company Limited (NNDC). Over the years, he brought his wealth of experience and knowledge to bear as he held various board appointments in public and private bodies, as well as serving on several tribunals and panels of inquiry. 
                    </p>
                    <div className={style.foundimageMobile}>
                        <LazyLoad height={200} offset={100}>
                            <img src={Meetimg} alt=" " />
                        </LazyLoad>
                    </div>
                    <div>
                        <button onClick={() => setShow(true)}>View Bio</button>
                    </div>
                </Col>  
            </Row>
        </div>
    )
}

export default MeetTheFounder
