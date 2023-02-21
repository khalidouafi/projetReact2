import React from 'react'
import { useState } from 'react'

export const Item = () => {
    const [data, setData]=useState({name: "Moustapha", age:27})
  return (
    <div>
        <h1> {data.name} </h1>
        <h1> {data.age} </h1>
    <input type='text' placeholder='Entrer un nom' value={data.name} onChange={(e)=>{setData({name:e.target.value})}} />
    <input type='text'placeholder='Entrer votre age' value={data.age} onChange={(e)=>{setData({age:e.target.value})}} />
    </div>
  )
}
