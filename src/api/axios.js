import axios from 'axios'

const BACKEND_URL= "http://localhost:4000"
const AXIOS_INSTATNCE = axios.create({
    baseURL:BACKEND_URL, 
    headers: {
        "Content-Type": "application/json",
    },
})

export default AXIOS_INSTATNCE