import React from 'react'
import { Link } from 'react-router-dom'
export const User = (props) => {
  return (
    <div>
        <Link to={props.path}>
<h1 className='list'>{props.name}</h1>
</Link>
<h1>{props.session}</h1>
<h1>{props.description}</h1>
    </div>
  )
}
