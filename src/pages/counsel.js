import React,{useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Row} from "react-bootstrap"
import { useDispatch,useSelector} from "react-redux"
import style from "../styles/counsel.module.css"

//Component
import CounselsCard from "../components/counselsCard"
import NotFound from "./notFound"

//API
import {fetchCounsel} from "../actions/request"
import Loader from "../components/loader"

function Counsel() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const counsel = useSelector((state) => state.counsel.data)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)


    
    useEffect(() => {
        dispatch(fetchCounsel())
    

    }, [dispatch])

    const pushPage = () => {
        history.push('/partners')
    }

    const pushPageTraineee = () => {
        history.push('/trainees')
    }

    return (
        <div className={style.attorneyContainer}>
            <div className={style.buttonContainer}>
                <button onClick={pushPage} >Partners</button>
                <button>counsel</button>
                <button onClick={pushPageTraineee}>trainees</button>
            </div>
            <div className={counsel ? `${style.attorneyCardContainer}` : ''}>
                {isLoading? 
                <Loader />
                : 
                    <>
                        {!counsel ? <NotFound  title="Counsels"/> : 
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

export default Counsel;
