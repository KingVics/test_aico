import React, {useState} from 'react'
import style from "../../styles/about.module.css"
import LazyLoad from 'react-lazyload';
import {useDispatch, useSelector} from "react-redux"



import Aboutimg from "../../images/com/aboutus2.jpg"
import ModalComponent from "../../components/Modal"
import NeedHelpModal from '../../components/NeedHelpModal';
import BestLawFirm from './Components/BestLawFirm';
import WhyContactUs from './Components/WhyContactUs';
import MeetTheFounder from './Components/MeetTheFounder';
import NeedHelp from './Components/NeedHelp';

import { submitForm } from "../../actions/request"


const initiateState = {firstName: "", lastName: "", subject: "",  phone_no: "", message: "", email: ""}
function About () {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showhelp, setShowhelp] = useState(false);
    const [messageRes, setMessage] = useState(null)
    const [formData, setFormData] =  useState(initiateState)
    const {loading} = useSelector((state) => state.counsel)

    const handleClose = () => setShow(false); //close modal
    const handleClosehelp = () => setShowhelp(false); //close modal

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(submitForm(formData, setMessage, setShowMessage)) 
    }

    return(
        <>
            <NeedHelpModal 
                show={showhelp} 
                handleClose={handleClosehelp} 
                formData={formData} 
                setFormData={setFormData} 
                handleSubmit={handleSubmit} 
                showMessage={showMessage}
                messageRes={messageRes}
                loading={loading}
            />
            <ModalComponent show={show} handleClose={handleClose} />
            <div className={style.aboutContainer}>
                <div className={style.aboutImgDiv}>
                    <LazyLoad height="100%" once>
                        <img src={Aboutimg} alt="" />
                    </LazyLoad>
                </div>
                <BestLawFirm />
                <WhyContactUs />
                <MeetTheFounder setShow={setShow} />
                <NeedHelp setShowhelp={setShowhelp} />
            </div>
        </>
    )
}

export default About;




