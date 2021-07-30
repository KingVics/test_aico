import axios from "axios"


const url = "https://rocky-shelf-24686.herokuapp.com"

export const fetchCounsel = () => axios.get(`${url}/counsel`)
export const fetchPartners = () => axios.get(`${url}/partners`)
export const fetchTrainee = () => axios.get(`${url}/trainees`)
export const submitForm = (post) => axios.post(`${url}/contact`, post)
