import React from 'react'
import '../styles/Servs.css'
import Sitio from '../assets/Sitio.png'
import CRM from '../assets/CRM.png'
import app from '../assets/app.png'

const Servs = () => {
  return (
    <>
    <h2>TE OFRECEMOS:</h2>
    <div className='servs'>
        <div className='item'>
        <a href='https://guitarla-next-gules.vercel.app/' target='_blank' ><img src={Sitio} /></a>
        <h3>Sitios web</h3>
        <p>Comercio digital, Sitios Web o Landing Pages</p>
        </div>
        <div className='item'>
        <a href='https://cotizar-criptos-react.netlify.app/' target='_blank' ><img src={app} /></a>
        <h3>Aplicaciones web</h3>
        <p>Las aplicaciones web son populares debido a lo práctico del navegador web como cliente ligero, a la independencia del sistema operativo, así como a la facilidad para actualizar y mantener aplicaciones web sin distribuir e instalar software a miles de usuarios potenciales.</p>
        </div>
        <div className='item'>
        <a href='https://seguimiento-de-pacientes-con-react.netlify.app/' target='_blank'><img src={CRM} /></a>
        <h3>CRM</h3>
        <p>Las plataformas de CRM permiten a tu empresa construir una relación duradera con los clientes y ofrecer la mejor experiencia a los consumidores durante todo el proceso de venta, según las campañas de marketing hechas.</p>
        </div>      
    </div>
    <h2><a className='text-2' id='app-whatsapp' href='https://api.whatsapp.com/send?phone=529842338016&amp;text=Hola!&nbsp;podria&nbsp;apoyarme?' target='_blank'>CONTACTANOS</a> PARA COTIZAR TU PROYECTO SIN COMPROMISO!</h2>
    </>
  )
}

export default Servs