import YoutubeEmbed from './YoutubeEmbed'
import './CardsNYT.scss'
import {Carousel} from '3d-react-carousal';

let slides = [
    <YoutubeEmbed className="embeds" embedId="w19wmJCgGsc" />,
    <YoutubeEmbed className="embeds" embedId="OGV5rJ40r4w" />,
    <YoutubeEmbed className="embeds" embedId="hYd-hJ3Khyk" />,
    <YoutubeEmbed className="embeds" embedId="JDRad1L-Iuk" />,
    <YoutubeEmbed className="embeds" embedId="0BHSS8tL1b4" />
]

const callback = function(index){
    console.log("callback",index);
}


function Cards() {



    return(

        <div>
            <Carousel slides={slides} autoplay={false} onSlideChange={callback} className="carousel"/>
        </div>


    )

}

export default Cards