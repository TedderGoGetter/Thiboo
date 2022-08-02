import './NavBar.scss'

const NavBar = ({aboutClick, contactClick}) => {


    return (
        <div className="navBar">
            <div className="navContent">
                <a className="abtTag" href="/" target="_blank" onClick={
                        (e) => aboutClick(e)
                        }><h3 className='abt' >ABOUT</h3>
                </a>

                <a className="abtTag" href="/" target="_blank" onClick={
                        (e) => contactClick(e)
                    }><h3 className='abt' >CONTACT</h3>
                </a>
            </div>
        </div>
    )
}

export default NavBar