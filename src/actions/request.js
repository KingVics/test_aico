import * as api from "../api"
import localforage from "localforage"


let counselCache = localforage.createInstance({
    name: "counsels"
});


let partnerCache = localforage.createInstance({
    name: "partners"
});



export const fetchCounsel = (counsel) => async(dispatch) => {
    dispatch({
        type: 'SUCCESS' //set loading to true at first instance
    });
    console.log(window.location.pathname)
    const cached = window.location.pathname === "/counsel" ? await counselCache.getItem("counsels") : await counselCache.getItem("partners"); //getItem("counsels") stored in local storage

    if(cached){
        dispatch({type: "FETCH_COUNSEL", payload: cached}) //dispatch the data from local storage to reducer
    }else{

        try {
            const {data} = await api.fetchCounsel(counsel)

            dispatch({
                type: 'FETCH_COUNSEL',
                payload: data.data
            })
            if(window.location.pathname === "/counsel") {
                await counselCache.setItem("counsels", data.data)
            } //setItem("counsels") stored in local storage
            else if(window.location.pathname === "/partners") {
                await partnerCache.setItem("partners", data.data)
            } //setItem("partners") stored in local storage
            else {
                await counselCache.setItem("trainees", data.data)
            }
            
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.message //if error occurs, dispatch the error message to reducer
            })
        }
    }
}

export const fetchPartners = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPartners()

        dispatch({type: 'FETCH_PARTNERS', payload: data});
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchTrainees = () => async(dispatch) => {
    try {
        const {data} = await api.fetchTrainee()

        dispatch({type: 'FETCH_TRAINEES', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const submitForm = (formData, setMessage, setShowMessage) => async(dispatch) => {
    setMessage(null)
    setShowMessage(false)
    dispatch({
        type: 'SUCCESS' //set loading to true at first instance
    });

    if(formData.firstName && formData.lastName && formData.email && formData.subject && formData.message) {
        try {
            const { data } = await api.submitForm(formData) 
            dispatch({type: "SUBMIT_FORM", payload: data})
            setMessage(data)
            setShowMessage(true)
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: "Something went wrong. Please try again" //if error occurs, dispatch the error message to reducer
            })
            setMessage("Something went wrong. Please try again")
            setShowMessage(true)
        }
    } else {
        setMessage('Please enter all valid details')
        setShowMessage(true)
        dispatch({
            type: 'ERROR', //set loading to true at first instance
            payload: ""
        });
    }
    
}