import images from '../exports/images';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {wrap} from '@popmotion/popcorn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/Carrusel.css'

const Carrusel = () => {
    const[[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = newDirection => {
        setPage([page + newDirection, newDirection]);
    }
  return (
    <>
      <div className="carrusel">
        <div className='img-container'>
      
        <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{opacity: 1}}
            exit={{ opacity: 0 }}
            />
            

     
        </div>
      <motion.button
     
      className="next"
      onClick={() => paginate(1)}>
      <FontAwesomeIcon icon={faCircleArrowRight} size='2x' />

      </motion.button>
      <motion.button
      
      className="prev"
      onClick={() => paginate(-1)}>
      <FontAwesomeIcon icon={faCircleArrowLeft} size='2x' />

      </motion.button>
      </div>
    </>
      
    
  )
}

export default Carrusel
