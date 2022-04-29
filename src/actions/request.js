import * as api from "../api"
// import localforage from "localforage"


// let counselCache = localforage.createInstance({
//     name: "counsels"
// });






export const fetchCounsel = (counsel) => async(dispatch) => {

    dispatch({
        type: 'SUCCESS' //set loading to true at first instance
    });

    // const cached = window.location.pathname === "/counsel" ? "counsel" : "partners"; //getItem("counsels") stored in local storage

    // if(cached){
    //     dispatch({type: "FETCH_COUNSEL", payload: cached}) //dispatch the data from local storage to reducer
    // }else{

        try {
            const {data} = await api.fetchCounsel(counsel)
            
            // if(window.location.pathname === "/partners") {
            //     await counselCache.setItem("partners", data.data)
            // } //setItem("counsels") stored in local storage
            // else{
            //     console.log('I am here')
            //     await counselCache.setItem("counsels", data.data)
            // } //setItem("partners") stored in local storage
            

            dispatch({
                type: 'FETCH_COUNSEL',
                payload: data.data
            })
            
            
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: error.message //if error occurs, dispatch the error message to reducer
            })
        }
    }




export const fetchCounselProfile = (counsel, id) => async(dispatch) => {
    const path = counsel === "/partners" ? "/partner" : counsel
    dispatch({
        type: 'LOADING' //set loading to true at first instance
    });


    try {

        const { data } = await api.fetchProfile(path, id)

        localStorage.setItem("profile", JSON.stringify(data.data[0])) //setItem("profile") stored in local storage

        dispatch({
            type: "FETCH_PROFILE",
            payload: data?.data[0]
        })
        
        
        
    } catch (error) {
        dispatch({
            type: 'REJECTED',
            payload: error.message //if error occurs, dispatch the error message to reducer
        })
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