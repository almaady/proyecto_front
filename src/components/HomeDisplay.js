import React, {Component} from 'react'
// import Axios from 'axios';
import Particles from 'react-particles-js';
import configPart from '../assets/particles.json'
import Goles from './Goles'
import Partidos from './Partidos'
import {getGoles, getPartidos} from '../services/userService'
import toastr from 'toastr'
import {Link} from 'react-router-dom'
import '../Home.css'
// import styled,{keyframes} from 'styled-components'

// let variable = 10
// const rotation = keyframes
// `
// from {
//     transform: rotate(calc(${variable} * 0deg));
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

// const Circle = styled.div
// `
// animation: ${rotation} infinite 20s linear;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// margin: 20px 20px;
// `

// const Circle2 = styled.div 
// `

// `


const particleOpt= configPart

// const url = 'https://recordis.herokuapp.com/'

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
//      Axios.get('https://recordis.herokuapp.com/',)
//      .then(res=>{
//          console.log(res.data)
//          this.setState({gol:res.data})
//      })
//      .catch(e=>console.log(e))
//  }



render() {
    const {gols, partidos} = this.state
    return(
        <div className="contenedorPart xxl">
            <div className="contenedorGeneral">
            <div className="info">
                <div className="titulo">
                <h1 id="tit" ></h1>
                <h2>Vuelve a sentir todas esas emociones. <br/> Vuelve a vivirlo.</h2>
                </div>
            </div>
            <div className="boton">
            <Link style={{ textDecoration: 'none', color:'#282c34', background:"#F0FFF1", borderRadius:"30px", padding:"30px", margin:"10px 10px", textAlign:"center", fontWeight:'700' }} className="linkPerfil"to="/signup">¡Escribe esas memorias!</Link>
            </div>
            <h1 className="seccion">Lee las historias de los demás...</h1>
            <h1 className="seccion2">Partidos</h1>
            <div className="contenedorGolesHome" >
                <Partidos partidos={partidos}/>
            </div>
            <h1 className="seccion2">Goles</h1> 
            <div className="contenedorGolesHome">
                <Goles gols={gols}/>
                </div>
            </div>
                <Particles params={particleOpt}/>

         </div>
    
    )
}
}


export default HomeDisplay
