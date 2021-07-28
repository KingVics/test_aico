import React from "react"
import style from "../styles/selectInput.module.css"

const SelectInput = (props) => {
    
    const element = props.element === "select" ?
        <div className={style.select_contianer}>
            <label>{props.label}</label>
            <div className={style.selects} >
                <select {...props}>
                    {props.children}
                </select>
            </div>
        </div> 

    : ""
    
    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    )
}

export default SelectInput;