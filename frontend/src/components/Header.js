import './Header.scss'
import NavBar from './NavBar'

const mainLogo = new URL('../images/Logotransparent.png', import.meta.url)

const cloud1 = new URL('../images/Cloud1.png', import.meta.url)
const cloud2 = new URL('../images/Cloud2.png', import.meta.url)
const cloud3 = new URL('../images/Cloud3.png', import.meta.url)
const cloud4 = new URL('../images/Cloud4.png', import.meta.url)

function Header({aboutClick, contactClick}) {




    return (
        <header className='headerContainer'>

            <nav className="desk-header">
        

                <a className="abtTag" href="/" target="_blank" onClick={
                        (e) => aboutClick(e)
                        }><h3 className='abt' >ABOUT</h3>
                </a>

                <div className="logoContainer">
                    <img src={mainLogo} alt="ThibaultTresca" className='logo'></img>
                    <img src={cloud1} alt="" className={"cloud cloud1"}></img>
                    <img src={cloud2} alt="" className={"cloud cloud2"}></img>
                    <img src={cloud3} alt="" className={"cloud cloud3"}></img>  
                    <img src={cloud4} alt="" className={"cloud cloud4"}></img>                    
                </div>    


                <a className="abtTag" href="/" target="_blank" onClick={
                        (e) => contactClick(e)
                    }><h3 className='abt' >CONTACT</h3>
                </a>


            </nav>
            <nav className="mob-header">
                <div className="logoContainer">
                    <img src={mainLogo} alt="ThibaultTresca" className='logo'></img>
                    <img src={cloud1} alt="" className={"cloud cloud1"}></img>
                    <img src={cloud2} alt="" className={"cloud cloud2"}></img>
                    <img src={cloud3} alt="" className={"cloud cloud3"}></img>  
                    <img src={cloud4} alt="" className={"cloud cloud4"}></img>                    
                </div>   

                <NavBar aboutClick={aboutClick} contactClick={contactClick} />               
            </nav>

            
        </header>
    )

}

export default Header
