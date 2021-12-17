import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"



const DropdownContainer = styled.div `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #10146B;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    overflow-y: auto;
`

const Icon = styled.div `   
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 

`
const CloseIcon = styled(FaTimes) `
    color: var(--buttonColor);
    font-size: 22px;

    &:hover {
        color: #d9cc39b4;
    }
`
const DropdownWrapper = styled.div ``
const DropdownMenu = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 80px);
    }

    li {
        margin: .7rem 0;
    }
    li:hover {

    }
`
const DropMenuLinks = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--buttonColor);
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const SubDropdownMenu = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
        margin: 0;
        width: 100%;
        list-style: none;
    }

    li {
        padding: 0.4rem;
    }
`

const SubDropMenuLinks = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    color: var(--buttonColor);
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }

`

const Dropdown = ({toggle, isOpen}) => {
    const [show, setShow] = useState(false)
    const [showP, setShowP] = useState(false)



    const mediaQuery = window.matchMedia('(max-width: 1024px)') 

    useEffect(() => {
        if (isOpen && mediaQuery.matches) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, mediaQuery]);

    const handleCounsel = () => {
        setShow(!show)
    }
    const handleP = () => setShowP(!showP)

    useEffect(() => {
        const checkState = () => {
            if(!isOpen) {
                setShow(false)
                setShowP(false)
                // setOpenEvent(false)
            }
        }
        return () => {
            checkState() 
        };
    }, [isOpen]);
    return (
        <DropdownContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                <ul>
                    <li onClick={toggle}>
                        <DropMenuLinks to="/">Home</DropMenuLinks>
                    </li>
                    <li onClick={toggle}>
                        <DropMenuLinks to="/about">About Us</DropMenuLinks>
                    </li>
                    <li onClick={handleCounsel}>
                        <DropMenuLinks to="#">Counsel</DropMenuLinks>
                    </li>
                    {show && 
                        <SubDropdownMenu>
                            <ul onClick={toggle}>
                                <li>
                                    <SubDropMenuLinks to="/partners">Partner</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/counsel">Counsel</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/trainees">Trainee</SubDropMenuLinks>
                                </li>
                            </ul>
                        </SubDropdownMenu>
                    }
                    <li  onClick={handleP}>
                        <DropMenuLinks to="#">Practice Area</DropMenuLinks>
                    </li>
                    {showP && 
                        <SubDropdownMenu>
                            <ul onClick={toggle}>
                                <li>
                                    <SubDropMenuLinks to="/aviation">Aviation</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/litigation">Litigation</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/labour_law">Labour Law</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/insurance">Insurance</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/foreign_investments">Foreign Investments and Privatisation</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/intellectualproperty">Intellectual Property</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/taxation">Taxation</SubDropMenuLinks>
                                </li>
                                <li>
                                    <SubDropMenuLinks to="/telecommunication_law">Telecommunication Law</SubDropMenuLinks>
                                </li>
                            </ul>
                            
                        </SubDropdownMenu>
                    }
                    <li onClick={toggle}>
                        <DropMenuLinks to="/events">Event</DropMenuLinks>
                    </li>
                    <li onClick={toggle}>
                        <DropMenuLinks to="/contact">Contact Us</DropMenuLinks>
                    </li>
                </ul>
                
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
