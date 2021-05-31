import React from 'react'
import {Carousel} from "react-bootstrap"

// STYLE
import style from "../styles/carousel.module.css"

// DATA
import data from "../data/carousel"

export default function Slider() {
    return (
        <Carousel  indicators={false} className={style.carouselMain} style={{zIndex: "-1"}}>
            {data.map((item) => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>{item.number}</h2>
                    <h3>{item.context}</h3>
                    <p>{item.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}
            
            
        </Carousel>
    )
}
