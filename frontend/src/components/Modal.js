import './Modal.scss'
import React from 'react'

const Modal = ({currentClass, aboutClick, contactClick}) => {
    const portrait = new URL('../images/portrait.jpg', import.meta.url)
    const igLogo = new URL('../images/igwhite.png', import.meta.url)


    if (currentClass === 'aboutModal') {
        return (
            <div className={currentClass} >
                <div className="closer" onClick={aboutClick}> </div>
                <div className="about">
                    <img src={portrait} alt="" className="portrait"/>
                    <p className="p1">Thibault Tresca is an emerging music video director and animator based in Tokyo. After getting a masters degree in 3D animation at DSK Supinfocom Rubika he made his directorial debut on Leon Fanourakis’ song Lamar in 2019. Since then Thibault has been making his way through the ranks shooting videos for the likes of SEEDA, YamieZimmer and week dudus. His guerilla shooting style combined with flashy animation has been heavily sought after and his every next project is bigger than the last.</p>
                </div>
            </div>
        )
    }

    if (currentClass === 'contactModal') {

        
        return (
            <div className={currentClass}>
                <div className="closer" onClick={contactClick}> </div>
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