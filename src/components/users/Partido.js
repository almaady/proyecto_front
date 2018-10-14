import React,{Component} from 'react'
// import axios from 'axios'
// import toastr from 'toastr'
import PartidoDisplay from './PartidoDisplay';
import Particles from 'react-particles-js';
import configPart from '../../assets/particles.json'
import {Link} from 'react-router-dom'
import Typekit from 'react-typekit';

const particleOpt= configPart

class Partido extends Component{
    state={
        user:{}
    }


componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
}


render(){
    const {user} = this.state
    return(
        <div className="contenedorPart xl">
            <div className="contenedorGeneral">
                <div className="contenedorForm">
                <h1><Link style={{ textDecoration: 'none', color:'#282c34', display:"block", textTransform:"capitalize" }} to="/profile">{user.username}</Link></h1>
                <PartidoDisplay/>
                </div>
            </div>
        <Particles params={particleOpt}/>
        <Typekit kitId="vgf7sax" />
        </div>
    )
}

}

export default Partido