import React from 'react'
import '../Goles.css'


const GolCard = ({descripcion, _id, equipo1,equipo2, user, jugador, link, minuto}) => {return(
    <section className="showhim golHomeB">
    <div className="showme golHomeC">
        <div className="favTituloG">
        <p><b>{minuto}'</b></p>
        <p>{jugador}</p>
        
        </div>
        <div className="golDiv2">
            <div className="equiposGol">
            <p>{equipo1} |</p>
            <p>{equipo2}</p>
            </div>
            <div className="favDescripcion">
        
            <p>{descripcion}</p>
            <p>Por <b>{user}</b></p>
            </div>
        </div>
    </div>

    </section>

)}

const Gallery = ({gols=[]}) => {
    if(gols.length < 1) return <h1>No hay goles creados</h1>
    return(

        <div className="inline">
            {gols.map((pic,i)=><GolCard key={i} {...pic} />)}
        </div>

    )
}

export default Gallery