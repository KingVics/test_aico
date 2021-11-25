import React, {useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import {useDispatch, useSelector} from "react-redux"
// import axios from "axios"

import style from "../../styles/contact.module.css"
import Addresses from './Components/Addresses/Addresses';
import Form from './Components/Form';

import { submitForm } from "../../actions/request"




const initiateState = {firstName: "", lastName: "", subject: "",  phone_no: "", message: "", email: ""}

function Contact () {
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false)
    const [messageRes, setMessage] = useState(null)
    const [formData, setFormData] =  useState(initiateState)

    const {loading, data} = useSelector((state) => state.counsel)

    

    const cancelMessage = () => {
        setShowMessage(false)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(submitForm(formData, setMessage, setShowMessage)) 
    }



    return(
        <>
            {showMessage && 
                <div className={ messageRes === "Something went wrong. Please try again"  ? style.formModalRed : messageRes  === "Enquiry successfully Sent" ? style.formModal : style.formModalNormal}>
                    {messageRes}
                    <div>
                        <ClearIcon  onClick={cancelMessage}/>
                    </div>
                </div>
            }
            <div className={style.contactUsContainer}>
                <h1>CONTACT US</h1>
                <Addresses />
                <div className={style.contactForm}>
                    <h2>Send us a  message</h2>
                    <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} style={style} loading={loading} data={data}/>
                </div>
            </div>
        </>
    )
}
export default Contact;