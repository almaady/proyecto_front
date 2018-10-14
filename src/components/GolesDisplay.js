import React from 'react'

const GolesDisplay= (props)=>{
   const {info} = props
  
  return(
    <div>
      {info.map((e,i) => (
        <div key={i}>
          <p>{e.descripcion}</p>
        </div>
      ))}
      
    </div>
  )
}
 export default GolesDisplay