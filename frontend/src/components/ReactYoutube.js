import YouTube from 'react-youtube'
import {useState, useRef, useEffect} from 'react'
import './ReactYoutube.scss'

const ReactYoutube = () => {

    const [embedSize, setEmbedSize] = useState([[256,154],[256,154],[256,154]])

    const vidRef = useRef([])

    const [mute, setMute] = useState(["M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"])

    const [muteArray, setMuteArray] = useState([false,false,false])
    const [videos, setVideos] = useState([
        {
            className:"embed video1",
            videoId:"JDRad1L-Iuk",
            opts:{
                height: embedSize[0][1],
                width: embedSize[0][0],
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  mute:1,
                  loop:1,
                  playlist:"JDRad1L-Iuk",
                  controls:0,
                  autoplay: 1,
                }
            }
        },
        {
            className:"embed video2",
            videoId:"OGV5rJ40r4w",
            opts:{
                height: embedSize[1][1],
                width: embedSize[1][0],
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  mute:1,
                  loop:1,
                  playlist:"OGV5rJ40r4w",
                  controls:0,
                  autoplay: 1,
                }
            }
        },
        {
            className:"embed video3",
            videoId:"_bbpZvUR4Fk",
            opts:{
                height: embedSize[2][1],
                width: embedSize[2][0],
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  mute:1,
                  loop:1,
                  playlist:"_bbpZvUR4Fk",
                  controls:0,
                  autoplay: 1,
                }
            }
        }

    ])

    useEffect(() => {

       muteArray.forEach((item, i) => {
        if (item) vidRef.current[i]?.target.unMute()
        if (!item) vidRef.current[i]?.target.mute()
       
       }, [muteArray])

       
    })

    const storeEffect = (e, i) => {
        vidRef.current[i] = e
    }


    const muteButtonClick = (num) => {

        const newArray = muteArray.map((item, i) => {
            if (num === i) return !item
            return false
        })

        const sizeArray = newArray.map((item, i) => {
            if (item === true) return ([640,390])
            return ([256,154])
        })

        setMuteArray(newArray)
        setEmbedSize(sizeArray)

        console.log('sizeArray', sizeArray)
        console.log('embedSize', embedSize)

    }

    const muteButton = (bool) => {     
        if (bool) return mute[0]
        if (!bool) return mute[1]
    }

    return (
        <div className='embed-container'>
            <div className='youtube-container'>

                {
                    videos.map((video, i) => (
                        <YouTube onReady={e => storeEffect(e, i)} className={video.className} videoId={video.videoId} opts={video.opts} />
                    ))
                }
            </div>
            <div className='button-container'>

                {muteArray.map((mute, i) => (
                    <svg onClick={() => muteButtonClick(i)} xmlns="http://www.w3.org/2000/svg" className="mute" viewBox="0 0 20 20" fill="#faebd7">
                        <path fillRule="evenodd" d={muteButton(mute)} clipRule="evenodd" />
                    </svg>
                ))}

            </div>
        </div>
    )


}

export default ReactYoutube