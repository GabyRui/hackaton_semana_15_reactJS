import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className='footer_content'>

            <div className='social_content'>
                <img src="./images/facebook (2).png" alt=""  className='button_social'/>
                <img src="./images/instagram (1).png" alt="" className='button_social' />
                <img src="./images/tik-tok (1).png" alt="" className='button_social'/>
            </div>

            <div className='button_content'>
                <button className='button_info'>Sobre nosotros</button>
                <button className='button_info'>contáctanos</button>
            </div>
        </div>
    </footer>
  )
}
