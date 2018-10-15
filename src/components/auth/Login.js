import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import Particles from 'react-particles-js';
import configPart from '../../assets/particles.json'
import Typekit from 'react-typekit';

const particleOpt= configPart


const url = 'https://recordis.herokuapp.com/login'

class Login extends Component{
    state={
        auth:{
            email:'',
            password:'',
        }
    }


login = (e) =>{
    e.preventDefault()
    const {auth} = this.state
    axios.post(url, auth)

    .then(res=>{
        console.log(res)
        toastr.success('Logueadoo')
        localStorage.setItem('user',JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        const hist = this.props.history
        hist.push('/profile')
    })

    .catch(e=>{
        toastr.error('noup2!')
    })
}

onChange = (e) =>{
    const field = e.target.name
    const value = e.target.value
    const {auth} = this.state
    auth[field] = value
    this.setState({auth})
}

render() {
    const{auth} = this.state
    return(
    <div className="contenedorPart">
        <div className="contenedorGeneral">
                
        <div className="contendorformulario">
            <h1 className="titulo">Inicia sesión</h1>
            <div className="formulario">
        <form onSubmit={this.login}>
        <p>
            Tu email.
            <br/>
            <input 
                name="email" 
                type="email"
                onChange={this.onChange}
                value={auth.email}
            />
        </p>

        <p>
        Tu contraseña.
                        <br/>
            <input 
                name="password" 
                type="password"
                onChange={this.onChange}
                value={auth.password}
            />
        </p>
        <button type="submit">Inicia sesión</button>
        
        </form>
        </div>
    </div>
    </div>
            <Particles params={particleOpt}/>
            <Typekit kitId="vgf7sax" />

    </div>
    )
}
}


export default Login