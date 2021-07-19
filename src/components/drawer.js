import React, {useState} from "react"
import { Link } from "react-router-dom"
import { push as Menu } from 'react-burger-menu'
import { FaAngleDown, FaAngleUp} from "react-icons/fa"
import style from "../styles/drawer.module.css"


const Draw = (props) =>  {
  const [show, setShow] = useState(false)
  const [showP, setShowP] = useState(false)
  const [openEvent, setOpenEvent] = useState(false)

  const handleCounsel = () => setShow(!show)
  const handleP = () => setShowP(!showP)
  const handleEvent = () => setOpenEvent(!openEvent)

  const closeMenu = () => {
    props.setOpen(!props.open)
  }

  return (
      <>
        <Menu  {...props}>
          <ul className={style.drawerNav}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About us</Link>
            </li>
            <div onClick={handleCounsel} className={style.drawerCounsels}>
              <Link to="#">Counsel</Link> 
              <div className={style.drawerCounselsSvg}>
                {show === true ?   <FaAngleUp /> :  <FaAngleDown /> }
              </div>
              {show && 
                <div className={style.drawerCounsels}>
                  <Link to="/partners"  onClick={closeMenu} >Partner</Link>
                  <Link to="/counsel"  onClick={closeMenu}>Counsel</Link>
                  <Link to="/trainees"  onClick={closeMenu}>Trainee</Link>
                </div>
              }
            </div>
            <div onClick={handleP} className={style.drawerParctice}>
              <Link to="#">Practice Areas</Link>
              <div className={style.drawerCounselsSvg}>
                {showP === true ?   <FaAngleUp /> :  <FaAngleDown /> }
              </div>
              {showP && 
                  <div className={style.dropDown}>
                    <Link to="#"  onClick={closeMenu}>Litigation</Link>
                    <Link to="#"  onClick={closeMenu}>Labour Law</Link>
                    <Link to="#"  onClick={closeMenu}>Insurance</Link>
                    <Link to="#"  onClick={closeMenu}>Foreign Investments and Privatisation</Link>
                    <Link to="#"  onClick={closeMenu}>Intellectual Property</Link>
                    <Link to="#"  onClick={closeMenu}>Taxation</Link>
                    <Link to="#"  onClick={closeMenu}>Telecommunication Law</Link>
                  </div>
              }
            </div>
            <div onClick={handleEvent} className={style.drawerEvent}>
              <Link to="#">Events</Link>
              <div className={style.drawerCounselsSvg}>
                {openEvent === true ?   <FaAngleUp /> :  <FaAngleDown /> }
              </div>
              {openEvent && 
                <div>
                    <div>
                        <Link to="#" onClick={closeMenu}>Publications</Link>
                    </div>
                    <div>
                        <Link to="#" onClick={closeMenu}>News</Link>
                    </div>        
                </div>
              }
            </div>

            <li >
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </Menu>
      </>
  )
}
export default Draw;