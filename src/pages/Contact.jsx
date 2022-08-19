import Formulario from '../components/Formulario'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Contact.css'
import img10 from '../assets/3.jpg'

const Contact = () => {
  return (
    <div>
    <Header />
    <section className='contact-principal'>
        <div className='contact-data'>
            <h1>Contacto</h1>
            <p><span>Locacion:<br/></span>
               Playa del Carmen, Mexico</p>
            <p><span>Telefono:<br/></span>
               +52 984-233-80-16</p>
             
         
        </div>
        <div className='contact-form'>
            <h1>Contact Form</h1>
            <Formulario />
        </div>
      
    </section>
    <Footer />
    </div>
  )
}

export default Contact
