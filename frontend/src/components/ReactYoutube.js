import YouTube from 'react-youtube'
import {useState} from 'react'

const ReactYoutube = ({embedId}) => {

    const [embedSize, setEmbedSize] = useState([256,154])

    const opts = {
        height: embedSize[1],
        width: embedSize[0],
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }

    // const onReady = (e) => {
    //     // access to player in all event handlers via event.target
    //     //e.target.pauseVideo();
    //     console.log("onReady was called")
    // }

    const onStateChange = (e) => {
        if (e.data === 1) {
            // console.log("player is playing")
            setEmbedSize([640,390])
        }
        if (e.data === 2) {
            // console.log("player paused")
            setEmbedSize([256,154])
        }
    }

//put this in to use onReady
// onReady={this._onReady}

    return (
        <div className='youtubeContainer'>

        <YouTube videoId={embedId} opts={opts} onStateChange={onStateChange}/>

        </div>
    )


}

export default ReactYoutube