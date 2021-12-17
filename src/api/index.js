import axios from "axios"


const url = "https://rocky-shelf-24686.herokuapp.com"

export const fetchCounsel = (counsel) => axios.get(`${url}${counsel}`)
export const fetchProfile = (page, id) => axios.get(`${url}${page}-details/${id}`)
export const submitForm = (formData) => axios.post(`${url}/contact`, formData)
