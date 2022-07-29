import './Modal.scss'

const Modal = ({currentClass}) => {

    const terryCrews = new URL('../images/TerryCrews.jpg', import.meta.url)


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

                <div className="contact">
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                            </div>
                            <div className="ownEmail">thibault.tresca</div>
                            <div className="ownEmail2">               @gmail.com</div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form">
                                <div className="app-form-group">
                                    <input className="app-form-control" placeholder="NAME" value="Tupac Shakur"/>
                                    <input className="app-form-control" placeholder="EMAIL"/>
                                    <input className="app-form-control" placeholder="CONTACT NO"/>
                                </div>
                                <div className="app-form-group message">
                                    <input className="app-form-control" placeholder="MESSAGE"/>
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default Modal