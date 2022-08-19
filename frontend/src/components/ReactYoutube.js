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

    const storeEffect = (e, ref) => {
        ref.current = e
    }

    

    const opts1 = {
        height: embedSize1[1],
        width: embedSize1[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }

    const opts2 = {
        height: embedSize2[1],
        width: embedSize2[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }

    const opts3 = {
        height: embedSize3[1],
        width: embedSize3[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }

    const onStateChange = (e, video) => {


        if (e.data === 1) {
            console.log(video)
            console.log("ref", ref1.current.target)
            // console.log("event", e.target)
            // console.log("playerstate", ref1.Youtube.PlayerState)
            
            ref1.current.target.playVideo()

            // e.target.mute()
            // ref1.current.destroyPlayer()
        }



        // console.log(e.target)
        // e.target.mute()

        //onPlayerStateChange get it the other way around. Let the videos figure out when another video's state has changed and then use e.target.
    }



    return (
        <div className='youtubeContainer'>

            <YouTube onReady={e => storeEffect(e, ref1)} className="embed video1" videoId="JDRad1L-Iuk" opts={opts1} onStateChange={e => onStateChange(e, 'video1')}/>
            <YouTube onReady={e => storeEffect(e, ref2)} className="embed video2" videoId="OGV5rJ40r4w" opts={opts2} onStateChange={e => onStateChange(e, 'video2')}/>
            <YouTube onReady={e => storeEffect(e, ref3)} className="embed video3" videoId="_bbpZvUR4Fk" opts={opts3} onStateChange={e => onStateChange(e, 'video3')}/>

        </div>
    )


}

export default ReactYoutube