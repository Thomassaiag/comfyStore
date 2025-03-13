import axios from 'axios'


const apiBaseURL = "https://strapi-store-server.onrender.com/api";

const customFetch=axios.create({
    baseURL: apiBaseURL,
    headers: {
        Accept: 'application/json'
    }
})

export default customFetch