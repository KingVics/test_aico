import React from 'react'
import "../styles/notFound.css"

export default function NotFound(props) {
    return (
        <div className="notFound">
            {props.title ? <h1>404 No {props.title} Found</h1> : 
            <h1>404 Not Found</h1> }
        </div>
    )
}
