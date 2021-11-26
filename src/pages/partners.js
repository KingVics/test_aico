import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom"
import {Row} from "react-bootstrap"
import{useDispatch, useSelector} from "react-redux"
import style from "../styles/counsel.module.css"
import {Helmet} from "react-helmet";


//Component
import CounselsCard from "../components/counselsCard"

//API
import {fetchCounsel} from "../actions/request"
import Loader from "../components/loader"
import NotFound from './notFound'
import { Button } from '../components/Button'



export default function Partners() {
    const location = useLocation();
    const dispatch = useDispatch();
    const path = location.pathname; //get the pathname from history
    const {loading, error, data} = useSelector((state) => state.counsel)


    useEffect(() => {
        dispatch(fetchCounsel(path))   //fetchCounsel()
    }, [dispatch, path])

    if(!data) return <NotFound  title="Partners"/> 

    return (
        <div className={data ? `${style.attorneyContainer}` : `${style.NoattorneyContainer}`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AICO</title>
                <meta name="description" content="Abdullahi Ibrahim and Co Partners, Counsels and Trainee are trained with the right skills set to help in your cases." />
                <meta name="keywords" content="Counsel Partner Trainee" />
                <meta name="author" content="Abdullahi Ibrahim and Co(AICO)" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <div className={data ? `${style.attorneyCardContainer}` : `${style.NoattorneyCardContainer}`}>
                {loading? 
                    <Loader />
                : error ? error
                :
                    <div>
                        <div className={style.buttonContainer}>
                            <Button active="true">Partners</Button>
                            <Button to="/counsel">Counsel</Button>
                            <Button to="/trainees">Trainees</Button>

                        </div>
                        <Row>
                            {data?.map((item) => (
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
                
            </div>
        </div>
    )
}
