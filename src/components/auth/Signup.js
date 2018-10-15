import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import Particles from 'react-particles-js';
import configPart from '../../assets/particles.json'

const particleOpt= configPart

class Signup extends Component{
    state = {
        signup: {
            username: '',
            email: '',
            password: '',
            password2: '',
            equipo:''
        }
    }

    componentWillMount() {
        this.setState({token: localStorage.getItem('token')})
        fetch('https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/12', {
            method: "GET",
            headers: {
                "Ocp-Apim-Subscription-Key": "c8e3354c5f8843d1a74b5a2c89370601"
            }
        })
        .then(res => res.json())
        .then(results => {
            //console.log(results.Teams)
            this.setState({teams: results.Teams})
        })
        .catch(err => console.log(err))
    }

    onChange = (e) =>{
        console.log(e.target.name, e.target.value)
        const {signup} = this.state
        let field = e.target.name
        signup[field] = e.target.value        
        this.setState({signup})
    }

    createUser = (e)=>{
        e.preventDefault()
        const {signup} = this.state
        if (signup.password !== signup.password2){
            return toastr.error('No coinciden las contraseñas')
        }
        axios.post('https://recordis.herokuapp.com/signup', signup)
        .then(user=>{
            console.log(user)
            toastr.success('Usuario Creado')
        })
        .catch(e=>toastr.error('Noup!'))
    }

    render(){
        const {signup, teams} = this.state
        if(!teams) return <p>Loading. . .</p>
        return(
        <div className="contenedorPart xl">  
            <div className="contendorformulario">
                <h1 className="titulo">Regístrate...</h1>
                <div className="formulario">
                    <form onSubmit={this.createUser}>
                    <p>
                        Nombre de usuario.
                        <br/>
                        <input 
                        name="username" 
                        type="text" 
                        onChange={this.onChange} 
                        value={signup.username} 
                        />
                    </p>
                    <p>
                        Tu email.
                        <br/>
                        <input 
                        name="email" 
                        type="email" 
                        onChange={this.onChange} 
                        value={signup.email} 
                        />
                    </p>
                    <p>¿A qué equipo le vas?</p>
                    <select name="equipo" onChange={this.onChange} value={signup.equipo}>
                        {teams.map((team, i) => {
                            return <option key={i} value={team.Name}>{team.Name}</option>
                        })}
                    </select>
                    <p>
                        Crea una contraseña.
                        <br/>
                        <input 
                        name="password" 
                        type="password" 
                        onChange={this.onChange} 
                        value={signup.password} 
                        />
                    </p>
                    <p>
                        Repite tu contraseña.
                        <br/>
                        <input 
                        name="password2" 
                        type="password" 
                        onChange={this.onChange} 
                        value={signup.password2} 
                        />
                    </p>
                <p>
                    <button type="submit">Regístrarse</button>
                </p>
                    </form>
                </div>
            </div>
            <Particles params={particleOpt}/>
            
         </div>
        )
    }
}

export default Signup