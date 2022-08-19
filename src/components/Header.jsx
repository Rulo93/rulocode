import {Outlet, Link} from 'react-router-dom' 
import '../styles/header.css'
import Logo from '../assets/SVG.png'

const Header = () => {
  return (
    <header>
      <nav>
      <div className="logo">
          <img src={Logo} />
      </div>
      <div className="home">
      <Link className='link' to='/'>HOME</Link>
      </div>
      <div className="contact">        
      <Link className='link' to='/Contact'>CONTACT</Link>
      </div>   
      </nav>
        <Outlet />
      
    </header>
  )
}

export default Header
