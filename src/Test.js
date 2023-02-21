import React from 'react'

export const Test = (props) => {
  return (
    <>
        
        <h1>JE SUIS NOUVEAU SUR REACT</h1>
        <h1>{props.names}</h1>
       < h1>{props.region}</h1>
          <h1>{props.adresse}</h1>
           <h1>{props.tel}</h1>
           <img src={props.image} alt="logo" /> 
         <div> <img src={props.children} alt="logo" /> </div> 
    </>
  )
}
