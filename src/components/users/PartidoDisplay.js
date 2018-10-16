import React, {Component} from 'react'
import {Spin} from 'antd'
// import axios from 'axios'
// import toastr from 'toastr'
// import Particles from 'react-particles-js';
// import configPart from '../../assets/particles.json'
// import {Link} from 'react-router-dom'

// const particleOpt= configPart

// const url = 'https://recordis.herokuapp.com/partido'

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
this.fetchLeague(12)
}

onChange = (e) =>{
    const {parti} = this.state
        let field = e.target.name
        parti[field] = e.target.value        
        this.setState({parti})
}

onChangeLiga = (e) =>{
if(e.target.value == 12){
    this.fetchLeague(12)
}else if(e.target.value == 3){
    this.fetchLeague(3)
}else if(e.target.value == 25){
    this.fetchLeague(25)
}
}

fetchLeague = (liga) =>{
    this.setState({token: localStorage.getItem('token')})
    fetch(`https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/${liga}`, {
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

crearPartido = (e)=>{
    e.preventDefault()
    const {parti} = this.state
    fetch('https://recordis.herokuapp.com/partido', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": this.state.token
        },
        body: JSON.stringify(parti)
    })
    .then(r => r.json())
    .then(res => this.props.history.push('/profile'))
    .catch(err => console.log(err))

}



render() {
    const{parti, teams} = this.state
    console.log(teams)
    if(!teams) return <div><Spin/></div>
    return(
        <div className="contenedorFormularioPartido">
         <div className="formularioP"> 
        <form onSubmit={this.crearPartido}>

        <p>Selecciona la liga</p>
            <select name="liga" onChange={this.onChangeLiga} >
            <option value="12"> Liga MX</option>
            <option value="25"> Mundial</option>
            <option value="3"> Champions </option>
        </select>
        
        <p>
            ¿Cuándo fue el partido?
            <br/>
            <input 
                name="partidoDate"
                type="date"
                onChange={this.onChange}
                value={parti.partidoDate}
                placeholder="Usuario"
            />
        </p>
        <p>¿Quién era local?</p>
        {this.state.teams.length !== undefined ? 
                    <select name="equipo1" onChange={this.onChange} value={parti.equipo1}>
                    {teams.map((team, i) => {
                        return <option key={i} value={team.Name}>{team.Name}</option>
                    })}
                </select> 
                : 
                <Spin/>
    }

        <p>¿Quién era visitante?</p>
        {   this.state.teams !== undefined ? 
            <select name="equipo2" onChange={this.onChange} value={parti.equipo2}>
            {teams.map((team, i) => {
                return <option key={i} value={team.Name}>{team.Name}</option>
            })}
        </select>
        :
        <Spin/>
        }
        
        <p>
            ¿Cuántos goles metió el equipo local?
            <input 
                name="marcadorL"
                type="number"
                onChange={this.onChange}
                value={parti.marcadorL}
            />
        </p>
        <p>
        ¿Cuántos goles metió el equipo visitante?
            <input 
                name="marcadorV"
                type="number"
                onChange={this.onChange}
                value={parti.marcadorV}
            />
        </p>
        <p>Ahora, descríbelo</p>
        <textarea name="descripcion" onChange={this.onChange} value={parti.descripcion} rows="20" cols="80" placeholder="¿Cómo fue? ¿Cómo lo viviste? ¿Qué lo hace tan espectacular?"/>
            <br/>
        <button type="submit">Guardar</button>
        
        </form>
        </div>
        </div>
    )
}
}


export default PartidoDisplay