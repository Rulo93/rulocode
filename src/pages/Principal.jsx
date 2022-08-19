import Secondary from '../components/Secondary'
import Servs from '../components/Servs'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import '../styles/principal.css'
import img5 from '../../src/assets/5.jpg'







const principal = () => {
  return (
    <>
      <div className="principal">
        <div className="intro">
          <h1>¿Por que un sitio web? <br />
           Cuando una institución cuenta con una página web eleva su prestigio, a la vez que permite que los clientes aumenten su nivel de confianza en el producto o servicio que ofrece. Un sitio web ayuda a incrementar las ventas, la productividad y el valor en el mercado. Cada vez son más las empresas que incorporan el servicio online.<br /> Nosotros podemos ayudarte a hacer crecer tu negocio
          </h1>
        </div>
      </div>
      <Secondary />
      <Servs />
      <Carrusel />
      <Footer />
    </>
      

  )
}

export default principal
