import React from "react";
import Input from "../../../util/Input"
import styled  from "styled-components";




const Btn = styled.button `
    background: transparent !important;
    width: 30%;
    border: 1px solid var(--buttonColor);
    font-size: 1.1em;
    text-transform: capitalize;
    text-transform: capitalize;
    padding: 0.8em 2.5em;
    color: #10146B !important;
    font-family: 'Lato', sans-serif;
    border-radius: 5px;
    transition: var(--mainTransition);

    &:hover {
        background: var(--buttonColor);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`

const Form = ({handleSubmit, formData, setFormData, style, loading, data}) => {
    return (
        <div className={style.contactCard}>
            <form noValidate onSubmit={handleSubmit} >
                <div className={style.InputFlex}>
                    <div style={{width: "100%"}} className={style.aboutModalAdjust}>
                        <Input 
                            name="firstName" 
                            label="First Name" 
                            type="text"
                            value={formData.firstName}
                            handleChange={(e) => setFormData({...formData, firstName: e.target.value })}
                        />
                    </div>
                    <div style={{width: "100%"}}>
                        <Input 
                            name="lastName" 
                            label="Last Name"
                            type="text"
                            value={formData.lastName}
                            handleChange={(e) => setFormData({...formData, lastName: e.target.value })}
                    
                        />
                    </div>
                </div>
                <div  className={style.InputFlex}>
                    <div style={{width: "100%"}} className={style.aboutModalAdjust}>
                        <Input 
                            name="phone_no" 
                            label="Phone" 
                            type="number"
                            value={formData.phone}
                            handleChange={(e) => setFormData({...formData, phone_no: e.target.value })}
                        />
                    </div>
                    <div style={{width: "100%"}}>
                        <Input 
                            name="email" 
                            label="Email" 
                            type="email"
                            value={formData.email}
                            handleChange={(e) => setFormData({...formData, email: e.target.value })}
                        />
                    </div>
                </div>
                <div className={`${style.contactFormMessage} ${style.InputText}`}>
                    <div style={{width: "100%"}}>
                        <Input
                            name="message"
                            label="Your Message"
                            multiline
                            rows={6}
                            defaultValue="Your Message"
                            half
                            handleChange={(e) => setFormData({...formData, message: e.target.value })}
                            value={formData.message}
                        />
                    </div> 
                    <div style={{width: "100%"}} className={style.aboutModalAdjustDown}>
                        <Input 
                            name="subject" 
                            label="Subject" 
                            handleChange={(e) => setFormData({...formData, subject: e.target.value })}
                            half 
                            placeholder="Subject" 
                            multiline 
                        />
                    </div>
                </div>
                <div className={style.aboutBtn}>
                    <Btn type="submit" disabled={loading}>{loading ? 'Sending' : 'Submit now'}</Btn>
                </div> 
            </form>
        </div>
    )
}

export default Form
