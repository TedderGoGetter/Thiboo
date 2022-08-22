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
      if (isOpen) setCurrentClass('closedModal')
      if (!isOpen) setCurrentClass('aboutModal')
      setIsOpen(!isOpen)
      console.log("About clicked")
      
  }

  const contactClick = (e) => {
    e.preventDefault()
    if (isOpen) setCurrentClass('closedModal')
    if (!isOpen) setCurrentClass('contactModal')
    setIsOpen(!isOpen)
    console.log("Contact clicked")
  }




      


  return (
    <div className="appContainer">
      <Header aboutClick={aboutClick} contactClick={contactClick}/>
      <Modal currentClass={currentClass}/>
      <ReactYoutube/>
      {/* <NewYoutube/> */}
      <Footer />
    </div>

  );
}

export default App;