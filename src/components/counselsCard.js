import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Col} from "react-bootstrap"
import styled from "styled-components"
import LazyLoad from 'react-lazyload';
import style from "../styles/counsel.module.css"
import { fetchCounselProfile} from "../actions/request"
import { useDispatch } from "react-redux"


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

export default function CounselsCard(props) {
    const dispatch = useDispatch()

    const history = useHistory()


    const handleProfile = (path, id) => {
        dispatch(fetchCounselProfile(path, id))   //fetchCounsel()
        history.push(`/profile/${props?.firstname}_${props?.lastname}`)

    }



    return (
        <Col  sm={6} md={6} lg={6} xl={4} key={props?.id} style={{position: "unset"}}>
            <div className={style.attorneyCard} >
                <LazyLoad height="100%">
                    <img src={props?.pic_url} alt="" />
                </LazyLoad>
                <div className={style.attorneyCardName}>
                    <h2>{props?.firstname} {props?.lastname}{props?.title || props?.title2 ? ",": ''} {props?.title ? `${props?.title}., ` : ''} {props?.title2 ? `${props?.title2}` : ''}   </h2>
                    <Btn onClick={() => handleProfile(props.path, props.id)} to="#">View {props?.firstname}'s profile</Btn>
                </div>
            </div>
        </Col>
    )
}
