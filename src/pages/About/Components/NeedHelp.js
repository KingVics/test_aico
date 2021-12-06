import React from "react"
import style from "../../../styles/about.module.css"

const NeedHelp = ({setShowhelp}) => {
    return (
        <div className={style.needHelp}>
            {/* <div>
                <h3>Lorem ipsum dolor sit amet </h3>
                <p>Lorem ipsum dolor sit amet </p>
            </div> */}
            <div>
                <h2>Need Help?</h2>
            </div>
            <div>
                <button onClick={() => setShowhelp(true)}>Case Evaluation</button>
            </div>
        </div>
    )
}

export default NeedHelp
