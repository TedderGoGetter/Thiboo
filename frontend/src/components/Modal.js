import './Modal.scss'

const Modal = ({currentClass}) => {

    const terryCrews = new URL('../images/TerryCrews.jpg', import.meta.url)



    return (
        <div className={currentClass}>

            <div className="about">
                <img src={terryCrews} alt="" className="portrait"/>
                <p className="p1">Terry Alan Crews born July 30, 1968 is an American actor, television host, and former American football linebacker. He played Julius Rock in the UPN/CW sitcom Everybody Hates Chris, which aired from 2005 to 2009, and portrayed Terry Jeffords in the Fox and NBC sitcom Brooklyn Nine-Nine 2013–2021.</p>
            </div>


            {/* <div className="contact">
                <div class="screen-header">
            <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            </div>
        </div>
        <div class="screen-body">
            <div class="screen-body-item left">
            <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
            </div>
            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div class="screen-body-item">
            <div class="app-form">
                <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" value="Krisantus Wanandi"/>
                </div>
                <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL"/>
                </div>
                <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO"/>
                </div>
                <div class="app-form-group message">
                <input class="app-form-control" placeholder="MESSAGE"/>
                </div>
                <div class="app-form-group buttons">
                <button class="app-form-button">CANCEL</button>
                <button class="app-form-button">SEND</button>
                </div>
                </div>
                </div>
                </div>
            </div> */}

        </div>
    )
}

export default Modal