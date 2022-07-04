import YoutubeEmbed from './YoutubeEmbed'
import './CardsNYT.css'
import {useState} from 'react'

const slides = [
    {
        title: 'Video 1',
        content: () => <YoutubeEmbed className="embeds" embedId="OGV5rJ40r4w" />
    },
    {
        title: 'Video 2',
        content: () => <YoutubeEmbed className="embeds" embedId="w19wmJCgGsc" />
    },
    {
        title: 'Video 3',
        content: () => <YoutubeEmbed className="embeds" embedId="JDRad1L-Iuk" />
    },
    {
        title: 'Video 4',
        content: () => <YoutubeEmbed className="embeds" embedId="hYd-hJ3Khyk" />
    },
    {
        title: 'Video 5',
        content: () => <YoutubeEmbed className="embeds" embedId="0BHSS8tL1b4" />
    },

]




function Cards() {

    const [centerSlide, setCenterSlide] = useState(1)

    const clickLeft = () => {setCenterSlide(centerSlide - 1)}
    const clickRight = () => {setCenterSlide(centerSlide + 1)}

    return(
        <div>
            <button>left</button>
            
            <button>right</button>
        </div>


        /*

        <div className="cardstack">
            <YoutubeEmbed className="embeds" embedId="OGV5rJ40r4w" />
            <YoutubeEmbed className="embeds" embedId="w19wmJCgGsc" />
            <YoutubeEmbed className="embeds" embedId="JDRad1L-Iuk" />
            <YoutubeEmbed className="embeds" embedId="hYd-hJ3Khyk" />
            <YoutubeEmbed className="embeds" embedId="0BHSS8tL1b4" />
        </div>
        */
    )

}

export default Cards