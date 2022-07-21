import YouTube from 'react-youtube'

const ReactYoutube = ({embedId}) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const _onReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
      }

//put this in to use onReady
// onReady={this._onReady}

    return (

        <YouTube videoId={embedId} opts={opts}  />
    )


}

export default ReactYoutube