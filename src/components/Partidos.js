import React from 'react'

const PartidoCard = ({descripcion, _id, equipo1, user,equipo2}) => {return(
    <section className="showhim partidoHomeB">
    <div className="showme golHomeC">
        <div className="favTituloG">
        <p><b>{user.username}</b></p>
        
        </div>
        <div className="golDiv2">
            <div className="equiposGol">
            <p>{equipo1} |</p>
            <p>{equipo2}</p>
            </div>
            <div className="favDescripcion">
        
            <p>{descripcion}</p>
            </div>
        </div>
    </div>

    </section>
)}


const Gallery = ({partidos=[]}) => {
    if(partidos.length < 1) return <h1>No hay partidos creados</h1>
    return(
        <div className="inline">
            {partidos.map((pic,i)=><PartidoCard key={i} {...pic} />)}
        </div>
    )
}

export default Gallery