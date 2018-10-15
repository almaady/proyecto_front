import React, {Component} from 'react'
// import axios from 'axios'
// import toastr from 'toastr'


// const url = 'http://localhost:3000/gol'

class GolDisplay extends Component{
    state={
        gol:{
            partidoDate:'',
            equipo1:[],
            equipo2:'',
            descripcion:'',
            jugador:'',
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
    const {gol} = this.state
        let field = e.target.name
        gol[field] = e.target.value        
        this.setState({gol})
}


crearGol = (e)=>{
    e.preventDefault()
    const {gol} = this.state
    fetch('http://localhost:3000/gol', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": this.state.token
        },
        body: JSON.stringify(gol)
    })
    .then(r => r.json())
    .then(res => this.props.history.push('/profile'))
    .catch(err => console.log(err))

}



render() {
    const{gol, teams, token} = this.state
    console.log(token)
    if(!teams) return <p>Loading. . .</p>
    return(
        <div className="contenedorFormularioPartido">
         <div className="formularioP"> 
        <form onSubmit={this.crearGol}>
        <p>
        ¿Cuándo fue el partido?
            <input 
                name="partidoDate"
                type="date"
                onChange={this.onChange}
                value={gol.partidoDate}
                placeholder="Usuario"
            />
        </p>
        <p>
            ¿Quién metió ese golazo?
            <input 
                name="jugador" 
                type="text"
                placeholder="jugador"
                onChange={this.onChange}
                value={gol.jugador}
            />
        </p>
        <p>
            ¿En qué minuto fue?
            <br/>
            <input 
                name="minuto" 
                type="text"
                placeholder="minuto"
                onChange={this.onChange}
                value={gol.minuto}
            />
        </p>
        <p>¿Quién era local?</p>
         <select name="equipo1" onChange={this.onChange} value={gol.equipo1}>
            {teams.map((team, i) => {
                return <option key={i} value={team.Name}>{team.Name}</option>
            })}
        </select>
        <p>¿Quién era visitante?</p>
        <select name="equipo2" onChange={this.onChange} value={gol.equipo2}>
            {teams.map((team, i) => {
                return <option key={i} value={team.Name}>{team.Name}</option>
            })}
        </select>
        <textarea name="descripcion" onChange={this.onChange} value={gol.descripcion} rows="10" cols="80"/>

        <button type="submit">Guardar</button>
        
        </form>
        </div>
        </div>
    )
}
}


export default GolDisplay