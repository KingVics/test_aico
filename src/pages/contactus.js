import React, {useState} from 'react'
import {Row, Col} from "react-bootstrap"
import Input from "../util/Input"
import {Button} from "@material-ui/core"
import {useDispatch} from "react-redux"

import style from "../styles/contact.module.css"

//Images
import Map1 from "../images/map1.png"
import Map2 from "../images/map2.png"
import Map3 from "../images/map3.png"

import {submitForm} from "../actions/request"


const initiateState = {firstName: "", lastName: "", subject: "",  phone_no: "", message: "", email: ""}

function Contact () {
    const dispatch = useDispatch();
    const [formData, setFormData] =  useState(initiateState)

    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(submitForm) {
            dispatch(submitForm(formData))
            clear()
        }
        clear()

    }

    const clear = () => {
        setFormData({firstName: "", lastName: "", subject: "",  phone_no: "", message: "", email: ""})
    } 
    return(
        <div className={style.contactUsContainer}>
            <div className={style.contactus}>
                <h1>CONTACT US</h1>
            </div>
            <hr />
            <div className={style.adressContainer}>
                <Row>
                    <Col sm={6} md={6} lg={6} xl={4}>
                        <div classname={style.abujaContainer}>
                                <h3>ABUJA FCT</h3>
                            <div className={style.abujaAddress}>
                                <p>
                                    45, Haille Selassie Street, Off Thomas Sankara Street, By Ecowas Secretariat, Asokoro, Abuja.
                                </p>
                                <p>
                                    Telephone: 234 (0) 97822512.
                                </p>
                                <p>
                                    E-mail: infoabuja@abdullahiibrahimco.org
                                </p>
                            </div>
                            <div className={style.mapContainer}>
                                <img src={Map1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={4}>
                        <div classname={style.lagosContainer}>
                                <h3>LAGOS ISLAND</h3>
                            <div  className={style.lagosAddress}>
                                <p>
                                    2 Towry Street,P.O. Box 60114, Ikoyi, Lagos State, Nigeria.
                                </p>
                                <p>
                                    Telephone: 234 (0)1 2633971
                                </p>
                                <p>
                                    E-mail: infolagos@abdullahiibrahimco.org
                                </p>
                            </div>
                            <div className={style.mapContainer}>
                                <img src={Map2} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={4}>
                        <div classname={style.kadunaContainer}>
                                <h3>KADUNA</h3>
                            <div  className={style.kadunaAddress}>
                                <p>
                                    Top Floor, Abdulssalam Ziza House, A9, Mogadishu City Centre, Kaduna
                                </p>
                                <p>
                                    Telephone: 234 (0) 62247997
                                </p>
                                <p>
                                    E-mail: kaduna@abdullahiibrahimco.org
                                </p>
                            </div>
                            <div className={style.mapContainer}>
                                <img src={Map3} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={style.contactForm}>
                <h2>Contact Form</h2>
                <p>Please fill the form below and we will contact you</p>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div>
                            <Input 
                                name="firstName" 
                                label="First Name" 
                                type="text"
                                value={formData.firstName}
                                handleChange={handleChange} 
                            />
                            <Input 
                                name="lastName" 
                                label="Last Name"
                                type="text"
                                value={formData.lastName}
                                handleChange={handleChange} 
                        
                            />
                        </div>
                        <div>
                            <Input 
                                name="phone_no" 
                                label="Phone" 
                                type="number"
                                value={formData.phone}
                                handleChange={handleChange}
                            />
                            <Input 
                                name="email" 
                                label="Email" 
                                type="email"
                                value={formData.email}
                                handleChange={handleChange} 
                            />
                        </div>
                        <div className={style.contactText}>
                            <Input
                                name="message"
                                label="Your Message"
                                multiline
                                rows={6}
                                defaultValue="Your Message"
                                half
                                handleChange={handleChange}
                                value={formData.message}
                            />
                            <Input name="subject" label="Subject" handleChange={handleChange} autoFocus half placeholder="Subject" multiline />
                        </div>
                        <div>
                            <Button type="submit">Submit now</Button>
                        </div> 
                    </form>
            </div>
        </div>
    )
}
export default Contact;