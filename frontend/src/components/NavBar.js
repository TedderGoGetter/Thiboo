import './NavBar.scss'
import {useState} from 'react'

const NavBar = ({aboutClick, contactClick}) => {

    const burg = new URL('../images/hamburgerIvory.png', import.meta.url)
    const burgX = new URL('../images/hamburgerClosedIvory.png', import.meta.url)

    const [currentClass, setCurrentClass] = useState('burgClosed')

    const burgClick = () => {
        if (currentClass === 'burgOpen') setCurrentClass('burgClosed')
        if (currentClass === 'burgClosed') setCurrentClass('burgOpen')
    }


    return (
        <div className="navBar">
            
            <div className={currentClass} onClick={burgClick}>
                <img className="burgPic" src={burg} alt="="/>
                <img className="burgXPic" src={burgX} alt="x"/>  


                <div className="navContent">
                    <div className="spaceMaker"></div>

                    <a href="/" target="_blank" onClick={
                            (e) => aboutClick(e)
                            }><h3 className='navTxt navAbt' >ABOUT</h3>
                    </a>

                    <a href="/" target="_blank" onClick={
                            (e) => contactClick(e)
                        }><h3 className='navTxt navCntct' >CONTACT</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar