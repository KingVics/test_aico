import React from 'react'
import { useHistory } from 'react-router'
import {Col} from "react-bootstrap"
import style from "../styles/counsel.module.css"

import axios from "axios"


export default function CounselsCard(props) {
    const history = useHistory()
    const id = props.id

    const handleRoute = async() => {
        try {
            const {data} = await axios.get(`http://localhost:6060/partner-profile/${id}`)
            const response  = await data.data[0];
            localStorage.setItem('profile', JSON.stringify(response));
            history.push(`/profile/${props?.name}`)
            
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <Col  sm={6} md={6} lg={6} xl={4} key={props?.partner_id} style={{position: "unset"}}>
            <div className={style.attorneyCard}  key={props?.partner_id}>
                <img src={props?.pic_url} alt="" />
                <div>
                    <h2>{props?.name}</h2>
                    <p>{props?.biography}</p>
                    <button onClick={handleRoute}>View {props?.name.split(" ")[0]}'s profile</button>
                </div>
            </div>
        </Col>
    )
}
