import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <section className="footer-container">
         <div className="sociales">        
           <a className='whats' id='app-whatsapp' href='https://api.whatsapp.com/send?phone=529842338016&amp;text=Hola!&nbsp;podria&nbsp;apoyarme?' target='_blank'><FontAwesomeIcon icon={faWhatsapp} size='2x'  /></a>
           <a className='face' id='app-facebook' href='https://www.facebook.com/profile.php?id=100076193084422' target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
           <a className='insta' id='app-instagram' href='https://www.instagram.com/electroplayamx/' target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
          </div>
          <div className="copy">
            <p>© 2022 - Todos los derechos reservados</p>
          </div>
        </section>

    </footer>
  )
}

export default Footer