import axios from 'axios'

const url = "http://localhost:3000/"

export const getInfo = () =>{
    axios.get( url + 'profile',{
        headers:{
            "Authorization" : localStorage.getItem('token')
        }
    })
    .then(res=>{
        console.log(res.data)
        this.setState({user:res.data})
    })
    .catch(e=>console.log(e))
}



export const getGoles = () => {
    return axios.get(url + 'goles',{})
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(e=>e)
}

export const getPartidos = () => {
    return axios.get(url + 'partidos',{})
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(e=>e)
}