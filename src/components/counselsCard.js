import React from 'react'
import { Link } from 'react-router-dom'
import {Col} from "react-bootstrap"
import styled from "styled-components"
import LazyLoad from 'react-lazyload';
import style from "../styles/counsel.module.css"


//import axios from "axios"

const Btn = styled(Link) `
    font-family: 'Lato', sans-serif;
    background-color: var(--buttonColor);
    /* border: 0.1px solid #AFAFAF; */
    color: var(--textColor);
    outline: 0;
    cursor: pointer;
    padding: 10px;
    text-transform: capitalize;
    /* text-shadow: var(--shadow) 2px 2px; */
    transition: var(--mainTransition);
    border-radius: 2px;

    &:hover {
        color: var(--textColor);
    }

`

export default function CounselsCard({firstname, lastname, pic_url, title1, title2, title3, path, id}) {
    

    return (
        <Col  sm={6} md={6} lg={6} xl={4} key={id} style={{position: "unset"}}>
            <div className={style.attorneyCard} >
                <LazyLoad height="100%">
                    <img src={pic_url} alt="" />
                </LazyLoad>
                <div className={style.attorneyCardName}>
                    <h2>{firstname} {lastname}{title1 || title2 ? ",": ''} {title1 ? `${title1}${title1 !== null && title2 !== null ?',' : ''}${title1 !== null && title3 !== null ?',' : ''} ` : ''}{title2 ? `${title2}${title2 !== null && title3 !== null ? ',' : ''}` : ''} {title3}   </h2>
                    <Btn 
                        to={`/profile${path}&${firstname} ${lastname}_${id}`} 
                        state={
                            { 
                                id: id, 
                                firstname: firstname, 
                                lastname: lastname,
                                path: path 
                            }
                        }>
                            View {firstname}'s profile
                    </Btn>
                </div>
            </div>
        </Col>
    )
}

// nClick={() => handleProfile(path, id)} 
