import React from 'react'

export const Card_Info = ( {dogItem} ) => {
  return (

    <div className='card_dog'> 
        <div>
            <h2 className='title'> {dogItem.name} </h2>
            <img src= {dogItem.img} alt= "" className='img_content' />
        </div>  

        <div className='details'>
            <p> <strong> Teléfono: </strong> {dogItem.telefono} </p>
            <p> <strong> País: </strong> {dogItem.pais} </p>
            <p> <strong> Descripción: </strong>{dogItem.descripcion} </p>
        </div>

    </div>
  )
}


{/* 
        <div className='card'>
            <img src="" alt=""/>
        </div>

        <div className='card_details'>

        </div> */}