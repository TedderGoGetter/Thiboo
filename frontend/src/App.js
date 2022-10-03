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
  
  const aboutClick = (e) => {
      e.preventDefault()
      if (isOpen && currentClass === 'contactModal') setCurrentClass('aboutModal')
      if (isOpen && currentClass === 'aboutModal') {
        setCurrentClass('closedModal')
        setIsOpen(!isOpen)
      }
      if (!isOpen) {
        setCurrentClass('aboutModal')
        setIsOpen(!isOpen)
      }
  }

  const contactClick = (e) => {
    e.preventDefault()
    if (isOpen && currentClass === 'aboutModal') setCurrentClass('contactModal')
    if (isOpen && currentClass === 'contactModal') {
      setCurrentClass('closedModal')
      setIsOpen(!isOpen)
    }
    if (!isOpen) {
      setCurrentClass('contactModal')
      setIsOpen(!isOpen)
    }
  }

  const outsideClick = (e) => {
    e.preventDefault()
    if (isOpen){
      setCurrentClass('closedModal')
      setIsOpen(!isOpen)
    }
}


  return (
    <div className="appContainer">
      <Header aboutClick={aboutClick} contactClick={contactClick}/>
      <Modal currentClass={currentClass} aboutClick={aboutClick} contactClick={contactClick} outsideClick={outsideClick}/>
      <ReactYoutube/>
      <Footer />
    </div>
  );
}

export default App;