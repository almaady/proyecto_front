import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Typekit from 'react-typekit';
// import axios from 'axios'
// import toastr from 'toastr'



// const url = 'http://localhost:3000/'

class Nav extends Component{
    state={
    }



render() {
    return(
        <div className="nav">
            <div>

            </div>
            <div className="links">
                <NavLink to="/"> Home </NavLink>
                |
                <NavLink to="/login"> Inicia Sesión </NavLink>
                |
                <NavLink  to="/signup"> Regístrate </NavLink>
                |
                <NavLink to="/aboutus"> Acerca de... </NavLink>
                |
                <NavLink to="/profile"> Perfil </NavLink>
                
            </div>
            <Typekit kitId="vgf7sax" />
         </div>
    
    )
}
}


export default Nav