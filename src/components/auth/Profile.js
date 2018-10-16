import React,{Component} from 'react'
import axios from 'axios'
// import toastr from 'toastr'
import Particles from 'react-particles-js';
import configPart from '../../assets/particles.json'
import {Link} from 'react-router-dom'
import Typekit from 'react-typekit';

const particleOpt= configPart

class Profile extends Component{
    state={
        user:{}
       // gol:{},
        //partido:{}
    }


componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return this.props.history.push('/login')
    this.getInfo()
    this.setState({user})
}

getInfo=()=>{
    axios.get('https://recordis.herokuapp.com/profile',{
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


getUserData = () =>{

}


render(){
    const {user} = this.state
    return(
        <div className="contenedorPart xl">
            <div className="perfil">
                <div className="cardPerfil">
                <div className="datosPerfil">
                <h1><Link style={{ textDecoration: 'none', color:'#282c34' }} to="/profile">{user.username}</Link> | <span>{user.equipo}</span></h1>
                <br/>
                {/* <p>{user.email}</p> */}
    
                <div className="crear">
                    <Link style={{ textDecoration: 'none', color:'#282c34', background:"#87B6A7", borderRadius:"20px", padding:"8px 20px", margin:"10px 0", textAlign:"center"  }} className="linkPerfil"to="/partido">Crear partido</Link>
                    <Link style={{ textDecoration: 'none', color:'#282c34', background:"#87B6A7", borderRadius:"20px", padding:"8px 20px", margin:"10px 10px", textAlign:"center"  }} className="linkPerfil"to="/gol">Crear gol</Link>
                </div>
                </div>
                {/* <div className="tituloSeccion">
                    <h2>Mi partido favorito es...</h2>
                    <h2>Mi gol favorito es...</h2>
                </div> */}
                <div className="favsPerfil"> 
                <div className="fav">
                <div className="favTitulo">
            <p> <b>{user.partido ? user.partido.marcadorL : ''}  </b> )  {user.partido ? user.partido.equipo1:''} </p>
                <p>{user.partido ? user.partido.equipo2 : ''}   ( <b>{user.partido ? user.partido.marcadorV:''} </b>  |</p>
                </div>
                <div className="favDescripcion">
                    <h2>Mi partido favorito es...</h2>
                    <p>{user.partido ? user.partido.descripcion:'Aún no hay partido favorito.'}</p>
                </div>
                
                </div>
                <div className="division1"></div>
                <div className="fav">
                {/* <h2>Gol</h2> */}
                <div className="favTitulo">
                    <p id="minuto">{user.gol ? user.gol.minuto:''}'</p>
                    <p id="jugador">{user.gol ? user.gol.jugador:''} </p>
                    
                    <p>{user.gol ? user.gol.equipo1:''} | </p>
                    <p>{user.gol ? user.gol.equipo2:''} |</p>
                
                </div>
                <div className="favDescripcion">
                    <h2>Mi gol favorito es...</h2>
                    <p>{user.gol ? user.gol.descripcion:'Aún no hay gol favorito.'}</p>
                </div>
                </div>
                </div>

                </div>
            </div>
        <Particles params={particleOpt}/>
        <Typekit kitId="vgf7sax" />
        </div>
    )
}

}

export default Profile