import YouTube from '@u-wave/react-youtube';
import './NewYoutube.scss'

const NewYoutube = () => {




    return (
        <div className="youtube-container">
            <YouTube
                video="JDRad1L-Iuk"
                autoplay={1}
                onBuffering={() => {
                    
                }}
            />
            <YouTube
                video="OGV5rJ40r4w"
                // autoplay
            />
            <YouTube
                video="_bbpZvUR4Fk"
                // autoplay
            />
        </div>
    )
}

export default NewYoutube