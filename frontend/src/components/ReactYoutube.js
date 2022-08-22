import YouTube from 'react-youtube'
import {useState, useRef} from 'react'
import './ReactYoutube.scss'

const ReactYoutube = () => {

    const [embedSize1, setEmbedSize1] = useState([256,154])
    const [embedSize2, setEmbedSize2] = useState([256,154])
    const [embedSize3, setEmbedSize3] = useState([256,154])

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const [mute, setMute] = useState(["M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"])
    const [muteBool, setMuteBool] = useState(true)
    const [muteBool2, setMuteBool2] = useState(false)
    const [muteBool3, setMuteBool3] = useState(true)

    const storeEffect = (e, ref) => {
        ref.current = e
    }

    const opts1 = {
        height: embedSize1[1],
        width: embedSize1[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          mute:1,
          loop:1,
          playlist:"JDRad1L-Iuk",
          controls:0,
          autoplay: 1,
        }
    }

    const opts2 = {
        height: embedSize2[1],
        width: embedSize2[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          mute:1,
          loop:1,
          playlist:"OGV5rJ40r4w",
          controls:0,
          autoplay: 1,
        }
    }

    const opts3 = {
        height: embedSize3[1],
        width: embedSize3[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          mute:1,
          loop:1,
          playlist:"_bbpZvUR4Fk",
          controls:0,
          autoplay: 1,
        }
    }

    const onStateChange = (e, video) => {


        if (e.data === 1) {
            // console.log(video)
            // console.log("ref", ref1.current.target)
            
            // ref1.current.target.playVideo()
        }

    }

    const muteButtonClick = (num) => {
        console.log('muteButton activated')
        setMuteBool(!muteBool)
        

    }

    const muteButton = (bool) => {     
        if (bool) return mute[0]
        if (!bool) return mute[1]
    }

    return (
        <div className='embed-container'>
            <div className='youtube-container'>

                <YouTube onReady={e => storeEffect(e, ref1)} className="embed video1" videoId="JDRad1L-Iuk" opts={opts1} onStateChange={e => onStateChange(e, 'video1')}/>
                <YouTube onReady={e => storeEffect(e, ref2)} className="embed video2" videoId="OGV5rJ40r4w" opts={opts2} onStateChange={e => onStateChange(e, 'video2')}/>
                <YouTube onReady={e => storeEffect(e, ref3)} className="embed video3" videoId="_bbpZvUR4Fk" opts={opts3} onStateChange={e => onStateChange(e, 'video3')}/>

            </div>
            <div className='button-container'>
                <svg onClick={() => muteButtonClick(1)} xmlns="http://www.w3.org/2000/svg" className="mute mute1" viewBox="0 0 20 20" fill="#faebd7">
                    <path fillRule="evenodd" d={muteButton(muteBool)} clipRule="evenodd" />
                </svg>
                <svg onClick={() => muteButtonClick(2)} xmlns="http://www.w3.org/2000/svg" className="mute mute2" viewBox="0 0 20 20" fill="#faebd7">
                    <path fillRule="evenodd" d={muteButton(muteBool2)} clipRule="evenodd" />
                </svg>
                <svg onClick={() => muteButtonClick(3)} xmlns="http://www.w3.org/2000/svg" className="mute mute3" viewBox="0 0 20 20" fill="#faebd7">
                    <path fillRule="evenodd" d={muteButton(muteBool3)} clipRule="evenodd" />
                </svg>

            </div>
        </div>
    )


}

export default ReactYoutube