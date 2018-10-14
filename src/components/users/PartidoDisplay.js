import React, {Component} from 'react'
// import axios from 'axios'
// import toastr from 'toastr'
// import Particles from 'react-particles-js';
// import configPart from '../../assets/particles.json'
// import {Link} from 'react-router-dom'

// const particleOpt= configPart

// const url = 'http://localhost:3000/partido'

class PartidoDisplay extends Component{
    state={
        parti:{
            partidoDate:'',
            equipo1:'',
            equipo2:'',
            descripcion:'',
            user:{},
            teams: []
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
    const {parti} = this.state
        let field = e.target.name
        parti[field] = e.target.value        
        this.setState({parti})
}


crearPartido = (e)=>{
    e.preventDefault()
    const {parti} = this.state
    fetch('http://localhost:3000/partido', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": this.state.token
        },
        body: JSON.stringify(parti)
    })
    .then(r => r.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

}



render() {
    const{parti, teams, token} = this.state
    console.log(token)
    if(!teams) return <p>Loading. . .</p>
    return(
        <div className="contenedorFormularioPartido">
         <div className="formularioP"> 
        <form onSubmit={this.crearPartido}>
        
        <p>
            ¿Cuándo fue el partido?
            <input 
                name="partidoDate"
                type="date"
                onChange={this.onChange}
                value={parti.partidoDate}
                placeholder="Usuario"
            />
        </p>
        <p>¿Quién era local?</p>
        <select name="equipo1" onChange={this.onChange} value={parti.equipo1}>
            {teams.map((team, i) => {
                return <option key={i} value={team.Name}>{team.Name}</option>
            })}
        </select>
        <p>¿Quién era visitante?</p>
        <select name="equipo2" onChange={this.onChange} value={parti.equipo2}>
            {teams.map((team, i) => {
                return <option key={i} value={team.Name}>{team.Name}</option>
            })}
        </select>
        <p>
            ¿Cuándo fue el partido?
            <input 
                name="marcadorL"
                type="number"
                onChange={this.onChange}
                value={parti.marcadorL}
            />
        </p>
        <p>
            ¿Cuándo fue el partido?
            <input 
                name="marcadorV"
                type="number"
                onChange={this.onChange}
                value={parti.marcadorV}
            />
        </p>
        <p>Ahora, descríbelo</p>
        <textarea name="descripcion" onChange={this.onChange} value={parti.descripcion} rows="20" cols="80"/>
            <br/>
        <button type="submit">Guardar</button>
        
        </form>
        </div>
        </div>
    )
}
}


export default PartidoDisplay