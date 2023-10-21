import React from 'react'

export const Header = () => {
  return (
    <header className='header_content'>
        <img src="./images/cropped-logopancho-copia-1.jpg" alt="" className='img_logo'></img>

        <div>
            <input type="text" placeholder='Busca el tipo de perrito' className='buscador'/>
        </div>

        <button className='button_subscribe'>Suscríbete</button>
    </header>
  )
}

