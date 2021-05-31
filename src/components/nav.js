import React, {useEffect} from "react"
import style from "../styles/nav.module.css"
import { Link } from "react-router-dom"
import {FaLinkedinIn, FaFacebookF, FaTwitter} from "react-icons/fa"
import Image from "../images/logo.png"

const Nav = () => {
    useEffect(() => {
        let menuLink = document.querySelector('.menuLink');
        let navS = document.getElementById('counselMenu')

    })
    return (
        <nav className={style.navContainer}>
            <div className={style.navSocial} id="navSocial">
                <img src={Image} alt="logo" />
                <div>
                    <Link to="#">
                        <FaLinkedinIn />
                    </Link>
                    <Link to="#">
                        <FaFacebookF />
                    </Link>
                    <Link to="#">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
            <ul className={style.navLink} id="sticky">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li style={{position: "relative"}}>
                    <Link to="#">Counsel</Link>
                    <CounselMenu />
                </li>
                <li style={{position: "relative"}}>
                    <Link to="#">practice area</Link>
                    <PracticeMenu />
                </li>
                <li style={{position: "relative"}}>
                    <Link to="#">events</Link>
                    <EventMenu />
                </li>
                <li>
                    <Link to="/contact">contact us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;


const CounselMenu = () => {
    return (
        <div className={style.counselMenu} id="counselMenu">
            <div>
                <Link to="/partners" className="menuLink">Partners</Link>
            </div>
            <div>
                <Link to="/counsel">Counsel</Link>
            </div>
            <div>
                <Link to="/trainees">trainee</Link>
            </div>            
        </div>
    )
}




const EventMenu = () => {
    return (
        <div className={style.counselMenu}>
            <div>
                <Link to="#">Publications</Link>
            </div>
            <div>
                <Link to="#">News</Link>
            </div>           
        </div>
    )
}

const PracticeMenu = () => {
    return (
        <div className={`${style.counselMenu} ${style.practiceMenu}`}>
            <div>
                <Link to="#">Litigation</Link>
            </div>
            <div>
                <Link to="#">Labour Law</Link>
            </div>  
            <div>
                <Link to="#">Insurance</Link>
            </div> 
            <div>
                <Link to="#">Foriegn Investment and Privatization</Link>
            </div> 
            <div>
                <Link to="#">Intellectual Property</Link>
            </div>  
            <div>
                <Link to="#">Taxation</Link>
            </div> 
            <div>
                <Link to="#">Telecommunication Law</Link>
            </div>        
        </div>
    )
}