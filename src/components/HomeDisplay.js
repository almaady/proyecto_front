import React, {Component} from 'react'
// import Axios from 'axios';
import Particles from 'react-particles-js';
import configPart from '../assets/particles.json'
import Goles from './Goles'
import Partidos from './Partidos'
import {getGoles, getPartidos} from '../services/userService'
import toastr from 'toastr'

const particleOpt= configPart

// const url = 'http://localhost:3000/'

class HomeDisplay extends Component{
    state={
        gols:[],
        partidos:[]
    }



componentWillMount(){
        this.getGoles2()
        this.getPartidos2()
    }


    getGoles2 = () => {
        getGoles()
        .then(gols=>{
            this.setState({gols})
        })
        .catch(e=>toastr.error("no pude traer tus goles"))
    }

    getPartidos2 = () =>{
        getPartidos()
        .then(partidos=>{
            this.setState({partidos})
        })
        .catch(e=>toastr.error("no pude traer tus partidos"))
    }
//  getHome=()=>{
//      Axios.get('http://localhost:3000/',)
//      .then(res=>{
//          console.log(res.data)
//          this.setState({gol:res.data})
//      })
//      .catch(e=>console.log(e))
//  }



render() {
    const {gols, partidos} = this.state
    return(
        <div className="contenedorPart xl">
            <div className="contenedorGeneral">
                <div className="contenedorGolesHome">
                <div className="orbitas"></div>
                <Goles gols={gols}/>
                </div>
                <Partidos partidos={partidos}/>
            </div>
                <Particles params={particleOpt}/>

         </div>
    
    )
}
}


export default HomeDisplay
