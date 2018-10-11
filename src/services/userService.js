import axios from 'axios'

const url = "http://localhost:3000/"

export const getUserData = (id) =>{
    return axios.get(url + 'users/' + id)
    .then (res=>{
        return res.data
    })
    .catch(e=>e)
}