import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import ReactYoutube from './components/ReactYoutube'
import './App.scss';


function App() {

  //Modal related
  const [isOpen, setIsOpen] = useState(false)
  const [currentClass, setCurrentClass] = useState('closedModal')
  
  const modalClick = (e) => {
      e.preventDefault()
      if (isOpen) setCurrentClass('closedModal')
      if (!isOpen) setCurrentClass('openModal')
      setIsOpen(!isOpen)
      console.log("Modal clicked")
      
  }

  const contactClick = (e) => {
    e.preventDefault()
    console.log("Contact clicked")
  }




      


  return (
    <div className="appContainer">
      <Header aboutClick={modalClick} contactClick={contactClick}/>
      <Modal currentClass={currentClass}/>
      <ReactYoutube/>
      <Footer />
    </div>

  );
}

export default App;