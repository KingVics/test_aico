import axios from "axios"


const url = "https://aicoo.herokuapp.com"

export const fetchCounsel = (counsel) => axios.get(`${url}${counsel}`)
export const fetchProfile = (path,id) => axios.get(`${url}/${path}-details/${id}`)
export const submitForm = (formData) => axios.post(`${url}/contact`, formData)
