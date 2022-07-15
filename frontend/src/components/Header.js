import './Header.css'

const mainLogo = new URL('../images/Thiboo.png', import.meta.url)

const cloud1 = new URL('../images/Cloud1.png', import.meta.url)
const cloud2 = new URL('../images/Cloud2.png', import.meta.url)
const cloud3 = new URL('../images/Cloud3.png', import.meta.url)

function Header({aboutClick, contactClick}) {




    return (
        <div>
            <img src={cloud1} alt="" className="cloud1"></img>
            <img src={cloud2} alt="" className="cloud2"></img>
            <img src={cloud3} alt="" className="cloud3"></img>

            <div class="header">
                <img src={mainLogo} alt="ThibaultTresca" className='logo'></img>
                

                <a href="/" target="_blank" onClick={
                    (e) => aboutClick(e)
                    }><h3 className='abt' >ABOUT</h3></a>
                <a href="/" target="_blank" onClick={
                    (e) => contactClick(e)
                }><h3 className='abt' >CONTACT</h3></a>
            </div>
        </div>
    )

}

export default Header
