import './Modal.scss'

const Modal = ({currentClass}) => {

    const terryCrews = new URL('../images/TerryCrews.jpg', import.meta.url)
    const igLogo = new URL('../images/igwhite.png', import.meta.url)




    if (currentClass === 'aboutModal') {
        return (
            <div className={currentClass}>

                <div className="about">
                    <img src={terryCrews} alt="" className="portrait"/>
                    <p className="p1">Terry Alan Crews born July 30, 1968 is an American actor, television host, and former American football linebacker. He played Julius Rock in the UPN/CW sitcom Everybody Hates Chris, which aired from 2005 to 2009, and portrayed Terry Jeffords in the Fox and NBC sitcom Brooklyn Nine-Nine 2013–2021.</p>
                </div>
            </div>
        )
    }

    if (currentClass === 'contactModal') {

        
        return (

            
            <div className={currentClass}>

                        <div className="contact-container left">
                            <div className="app-title">
                                <span>THIBAULT</span>
                                <span>TRESCA</span>
                            </div>
                            <a href="mailto:thibault.tresca@gmail.com" target="_blank" rel="noreferrer" className="ownEmail contactGroup">thibault.tresca <br/>@gmail.com</a>
                            <a href="https://instagram.com/thibault.tresca" target="_blank" rel="noreferrer" className="igLink igs contactGroup"  ><img className="igLogo igs" src={igLogo} alt="ig:"/> : @thibault.tresca</a>
                            <div className="tokyoTag contactGroup">Tokyo, Japan</div>
                        </div>
            </div>
        )
    }
}

export default Modal