import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import styled from "styled-components"
import style from "../styles/nav.module.css"
import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"

import Logo from "../images/logorm.png"
import {PubData} from "../data/publication"



const MenuBars = styled(FaBars) `
    display:  none;

    @media screen and (max-width: 1024px) {
        display: block;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        top: 25px;
        right: 25px;
        transform:  translate(-50%, 25%);
        color: ${({notHome}) => (notHome ? 'var(--textColor)': '')}
    }
`

const HomeLink = styled(Link) `

`

const Image = styled.img `
    width: 40px;
    height: 40px;

    @media screen and (min-width: 769px) {
        width: 60px;
        height: 60px;
    }
`

const Nav = ({ toggle}) => {
    const location = useLocation();
    const [notHome, setNotHome] = useState(false)
    const [active, setActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)
    const [contatcActive, setContactActive] = useState(false)
    const [counselActive, setCounselActive] = useState(false)
    const [practiceActive, setPracticeActive] = useState(false)
    const [eventActive, setEventActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isCounsel, setIsCounsel] = useState(false)
    const [checkScroll, setCheckScroll] = useState(false)
    

    const scrollHandler = () => {
        if(window.scrollY >= 80) {
            setCheckScroll(true)
            
        } else {
            setCheckScroll(false)
            
        }
    }

    window.addEventListener('scroll', scrollHandler)

    useEffect(() => {
        if(location.pathname !== "/" ) {
            setNotHome(true)
        }
        else {
            setNotHome(false)
        }
    }, [location.pathname])

    useEffect(() => {
        if(location.pathname) {
            setActive(true)
            setAboutActive(false)
            setContactActive(false)
            setCounselActive(false)
            setPracticeActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/about") {
            setAboutActive(true)
            setActive(false)
            setContactActive(false)
            setCounselActive(false)
            setPracticeActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/contact") {
            setContactActive(true)
            setAboutActive(false)
            setActive(false)
            setCounselActive(false)
            setPracticeActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/partners" || location.pathname === "/counsel" || location.pathname === "/trainees" ) {
            setCounselActive(true)
            setContactActive(false)
            setAboutActive(false)
            setActive(false)
            setPracticeActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/aviation" || location.pathname === "/litigation"  || location.pathname === "/labour_law" 
        || location.pathname === "/insurance" || location.pathname === "/foreign_investments" || location.pathname === "/intellectualproperty" 
        || location.pathname === "/taxation" || location.pathname === "/telecommunication_law") {
            setPracticeActive(true)
            setCounselActive(false)
            setContactActive(false)
            setAboutActive(false)
            setActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/publications" || location.pathname === "/news" ) {
            setPracticeActive(true)
            setCounselActive(false)
            setContactActive(false)
            setAboutActive(false)
            setActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/profile/:id"  ) {
            setPracticeActive(false)
            setCounselActive(false)
            setContactActive(false)
            setAboutActive(false)
            setActive(false)
            setEventActive(false)
        }

    }, [location.pathname])

    useEffect(() => {
        if(location.pathname === "/events" || location.pathname === `/events/publication/${PubData.title}` ) {
            setPracticeActive(false)
            setCounselActive(false)
            setContactActive(false)
            setAboutActive(false)
            setActive(false)
            setEventActive(true)
        }

    }, [location.pathname])


    const checkOpen = (item) => {
        setIsOpen(item)
    }

    const checkCounsel = (item) => {
        setIsCounsel(item)
    }

    


    return (
        <>
        {location.pathname === `/events/publication/1` || location.pathname === `/events/publication/2` || 
            location.pathname === `/events/publication/3` || location.pathname === `/events/publication/4` ? "" :
            
            (
            <nav className={checkScroll  ? `${style.navContainer} ${style.activeScroll} ${style.activeScollLink}` : `${style.navContainer} ${style.navContainer}`}>
                <div style={{color: "#fff"}} className={checkScroll ? `${style.logoScroll}` : '' }>
                    <HomeLink to="/">
                        <Image src={Logo} alt="" />
                    </HomeLink>
                </div>
                <ul className={ notHome ? `${style.linkChange} ${style.navLink}  ` : style.navLink}>
                    <li className={active ?  `${style.Active}` : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={checkScroll && aboutActive ?  ` ${style.ActiveOtherScroll}` : aboutActive ? `${style.ActiveOther}` : ""}>
                        <Link to="/about" >About us</Link>
                    </li>
                    <li style={{position: "relative"}}  className={checkScroll && counselActive ? ` ${style.ActiveOtherScroll}` : counselActive ? `${style.ActiveOther}` : "" } onMouseOver={checkCounsel} onMouseLeave={(item) => setIsCounsel(!item)}>
                        <Link to="#">Counsel</Link>
                        {isCounsel && 
                            <div className={checkScroll ? `${style.dropDown} ${style.dropDownScroll}` : `${style.dropDown}`} onClick={() => setIsCounsel(false)}>
                                <div>
                                    <Link to="/partners">Partners</Link>
                                </div>
                                <div>
                                    <Link to="/counsel">Counsel</Link>
                                </div>        
                                {/* <div>
                                    <Link to="/trainees">Trainees</Link>
                                </div> */}
                            </div>
                        }
                    </li>
                    <li style={{position: "relative"}}  className={checkScroll && practiceActive ? ` ${style.ActiveOtherScroll}` : practiceActive ? `${style.ActiveOther}` : "" }  onMouseOver={checkOpen} onMouseLeave={(item) => setIsOpen(!item)}>
                        <Link to="#">practice area</Link>
                        {isOpen && 
                            <div className={checkScroll ? `${style.dropDown} ${style.dropDownScroll}` : `${style.dropDown}`} onClick={() => setIsOpen(false)}>
                                <div>
                                    <Link to="/aviation">Aviation</Link>
                                </div>
                                <div>
                                    <Link to="/litigation">Litigation</Link>
                                </div>
                                <div>
                                    <Link to="/labour_law">Labour Law</Link>
                                </div>        
                                <div>
                                    <Link to="/insurance">Insurance</Link>
                                </div>
                                <div>
                                    <Link to="/foreign_investments">Foreign Investments and Privatisation</Link>
                                </div>
                                <div>
                                    <Link to="/intellectualproperty">Intellectual Property</Link>
                                </div>
                                <div>
                                    <Link to="/taxation">Taxation</Link>
                                </div>
                                <div>
                                    <Link to="/telecommunication_law">Telecommunication Law</Link>
                                </div>
                            </div>
                        }
                    </li>
                    <li style={{position: "relative"}}   className={checkScroll && eventActive ? ` ${style.ActiveOtherScroll}` : eventActive ? `${style.ActiveOther}` : "" }>
                        <Link to="/events">events</Link>
                    </li>
                    <li  className={checkScroll && contatcActive ? `${style.ActiveOtherScroll}` : contatcActive ?  `${style.ActiveOther}` : ""}>
                        <Link to="/contact">contact us</Link>
                    </li>
                </ul>
                <div className={ notHome ? ` ${style.hamburgerMenu} ${style.linkChange} `: checkScroll ? `${style.activeScollLink}  ${style.hamburgerMenu}` : `${style.hamburgerMenu} `}>
                    <MenuBars onClick={toggle} />
                </div>
            </nav>
        )}
        </>
    )
}

export default Nav;

