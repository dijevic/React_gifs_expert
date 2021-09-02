import React from 'react'

export const GifGridItem = ({id,img,title}) => {
    return (
       <div className="card ">
           
           <img  src={img} alt={title} />
           <p>{title}</p>
           
       </div>
    )
}
