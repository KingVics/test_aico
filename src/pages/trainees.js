import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Row} from "react-bootstrap"
import{useDispatch, useSelector} from "react-redux"
import style from "../styles/counsel.module.css"

//Component
import CounselsCard from "../components/counselsCard"
import NotFound from "./notFound"

//API
import {fetchTrainees} from "../actions/request"
import Loader from "../components/loader"



export default function Trainees() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const counsel = useSelector((state) => state.counsel.data)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    useEffect(() => {
        dispatch(fetchTrainees())
    }, [dispatch])

    
    const pushPage = () => {
        history.push('/counsel')
    }

    const pushPageTraineee = () => {
        history.push('/partners')
    }

    if(!counsel) {
        return (
            <NotFound 
                title="Trainee"
            />
        )
    }

    return (
        <div className={style.attorneyContainer}>
            <div className={style.buttonContainer}>
                    <button onClick={pushPageTraineee}>partners</button>
                    <button onClick={pushPage}>counsel</button>
                    <button>trainees</button>
            </div>
            <div className={counsel ? `${style.attorneyCardContainer}` : ''}>
                {isLoading? 
                    <Loader />
                : 
                    <>
                        {!counsel ? <NotFound  title="Trainees"/> : 
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
                        }
                    </>
                }
                
            </div>
        </div>
    )
}
