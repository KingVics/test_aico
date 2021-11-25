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

export default function CounselsCard(props) {
    // const history = useHistory()
    // const id = props.id

    // const handleRoute = async() => {
    //     try {
    //         const {data} = await axios.get(`http://localhost:6060/partner-profile/${id}`)
    //         const response  = await data.data[0];
    //         localStorage.setItem('profile', JSON.stringify(response));
    //         // history.push(`/profile/${props?.name}`)
    //         history.push('/profile/:id')
            
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }
    return (
        <Col  sm={6} md={6} lg={6} xl={4} key={props?.partner_id} style={{position: "unset"}}>
            <div className={style.attorneyCard}  key={props?.partner_id}>
                <LazyLoad height="100%">
                    <img src={props?.pic_url} alt="" />
                </LazyLoad>
                <div className={style.attorneyCardName}>
                    <h2>{props?.name}</h2>
                    <p>{props?.biography}</p>
                    {/* <button onClick={handleRoute}>View {props?.name.split(" ")[0]}'s profile</button> */}
                    <Btn to='/profile/:id'>View {props?.name?.split(" ")[0]}'s profile</Btn>
                </div>
            </div>
        </Col>
    )
}
