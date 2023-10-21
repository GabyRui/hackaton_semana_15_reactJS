import React from 'react'
import { Card_Info } from './Card_Info';

export const Content = ({dogs}) => {

  return (
    <main>

        <hr/>
        <h2 className='h2_content'>¡Hola, soy Panchito! , y aquí te enseñaré a detalle una breve descripción de mis amiguitos perrunos que se encuentran perdidos. Por favor, si los logras identificar, ponte en contacto con el número indicado para que ayudes a que nuestros amiguitos perrunos puedan reencontrarse con sus padres. ¡Muchas gracias!</h2>

        <div className='dogs_container'>
            {
                dogs.map( (items) => (
                    <Card_Info dogItem = {items} key= {items.id} />
                ))
            }
        </div>

    </main>
  )
}
