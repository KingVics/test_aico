import React from "react"
import { Modal} from "react-bootstrap"
import Form from "../pages/Contact/Components/Form"

import style from "../styles/needHelp.module.css"



const NeedHelpModal = ({show, handleClose, formData, setFormData, handleSubmit, showMessage,messageRes, loading }) => {
    

    return (
        <Modal show={show} onHide={handleClose} size="lg" style={{top: '60px'}}>
            <Modal.Header closeButton  style={{padding: "2rem 2rem 0", border: '0'}}>
                <h2>Send us a  message</h2>
            </Modal.Header>
            <Modal.Body style={{padding: "0rem 2rem 2rem"}}>
                {showMessage && 
                    <div style={{color: messageRes === "Something went wrong. Please try again"  ? 'red' : messageRes === "Enquiry successfully Sent" ? '#66DE93' : '#FFC947'}}>
                        <p style={{fontSize: '1.2em'}}>{messageRes}</p>
                    </div>
                }
                <Form formData={formData} setFormData={setFormData} style={style} handleSubmit={handleSubmit} loading={loading}/>
            </Modal.Body>
        </Modal>
            
    )
}

export default NeedHelpModal
