import React, {useState, useEffect} from 'react'
import {Row} from "react-bootstrap"
import{useDispatch, useSelector} from "react-redux"
import style from "../styles/counsel.module.css"


//Component
import CounselsCard from "../components/counselsCard"

//API
import {fetchPartners} from "../actions/request"
import Loader from "../components/loader"
import NotFound from './notFound'
import { Button } from '../components/Button'



export default function Partners() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const counsel = useSelector((state) => state.counsel.data)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    useEffect(() => {
        dispatch(fetchPartners())
    }, [dispatch])

    return (
        <div className={counsel ? `${style.attorneyContainer}` : `${style.NoattorneyContainer}`}>
            <div className={counsel ? `${style.attorneyCardContainer}` : `${style.NoattorneyCardContainer}`}>
                {isLoading? 
                    <Loader />
                : 
                    <>
                        {!counsel ? <NotFound  title="Partners"/> : 
                            <div>
                                <div className={style.buttonContainer}>
                                    <Button active="true">Partners</Button>
                                    <Button to="/counsel">Counsel</Button>
                                    <Button to="/trainees">Trainees</Button>

                                </div>
                                <Row>
                                    {counsel?.map((item) => (
                                        <CounselsCard 
                                            pic_url={item.pic_url}
                                            name={item.name}
                                            biography={item.biography}
                                            key={item.partner_id}
                                            id={item.partner_id}
                                        />

                                    ))}
                                </Row>
                                
                            </div>
                            
                        }
                    </>
                
                }
                
            </div>
        </div>
    )
}
