import YoutubeEmbed from './YoutubeEmbed'
import './CardsNYT.css'


function Cards() {

    return(
        <div className="cardstack">
            <YoutubeEmbed className="embeds" embedId="OGV5rJ40r4w" />
            <YoutubeEmbed className="embeds" embedId="w19wmJCgGsc" />
            <YoutubeEmbed className="embeds" embedId="JDRad1L-Iuk" />
            <YoutubeEmbed className="embeds" embedId="hYd-hJ3Khyk" />
            <YoutubeEmbed className="embeds" embedId="0BHSS8tL1b4" />
            

        </div>
    )

}

export default Cards