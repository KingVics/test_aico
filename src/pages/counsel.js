import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom"
import {Row} from "react-bootstrap"
import { useDispatch,useSelector} from "react-redux"
import style from "../styles/counsel.module.css"
import {Helmet} from "react-helmet";

//Component
import CounselsCard from "../components/counselsCard"
import NotFound from "./notFound"

//API
import {fetchCounsel} from "../actions/request"
import Loader from "../components/loader"
import { Button } from '../components/Button'




function Counsel() {
    const location = useLocation();
    const dispatch = useDispatch();
    const path = location.pathname; //get the pathname from history
    const {loading, error, data} = useSelector((state) => state.counsel)

    
    
    useEffect(() => {
        dispatch(fetchCounsel(path))   //fetchCounsel()
    }, [dispatch, path])


    
    if(!data){
        return  <NotFound  title="Counsel"/> 
    }

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
                            <Button to="/partners">Partners</Button>
                            <Button to="#" active="true">Counsel</Button>
                            {/* <Button to="/trainees">Trainees</Button> */}
                        </div>
                        <Row>
                            {data?.map((item, i) => (
                                <CounselsCard 
                                    // id={i}    //id
                                    key={i}
                                    pic_url={item.pic_url}
                                    firstname={item.firstname}
                                    lastname={item.lastname}
                                    title1={item.title1}
                                    title2={item.title2}
                                    title3={item.title3}
                                    id={item.counsel_id}
                                    path={path}
                                    i={i}
                            
                                />

                            ))}
                        </Row>
                    </div>
                } 
            </div>
        </div>

    )
}

export default Counsel;
