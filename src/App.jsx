import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Principal from './pages/Principal.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  

  return (
  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
         <Route index element={<Principal />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
                
          </Routes>
     </BrowserRouter>
    
  )
}

export default App
