import axios from 'axios';


const instance = axios.create({
    // baseURL:"http://localhost:3000",
    baseURL:import.meta.env.VITE_BASE_URL,
    
    // allows to or will send the crediential 
    withCredentials:true
})

export default instance;