import React from 'react'
import { Datas } from './Datas'
import { useState } from 'react'
import { User } from './User'
export const Home = () => {
    const [blog, setBlog] =useState(Datas)
    

  return (
    <div  className='list'>
        
        {
            blog.map((blogs)=>(
<User   
      key={blogs.id}
      id={blogs.id}
      name={blogs.name}
      session={blogs.session}
      description={blogs.description}
      path='service'

/>

     

            )


           )

       }


    </div>

  )
}
