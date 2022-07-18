import YoutubeEmbed from './YoutubeEmbed'
import './CardsNYT.scss'

function Cards() {



    return(

        <div className='cardsContainer'>
            <YoutubeEmbed className={"embeds vid1"} embedId="w19wmJCgGsc" />
            <YoutubeEmbed className={"embeds vid2"} embedId="OGV5rJ40r4w" />
            <YoutubeEmbed className={"embeds vid3"} embedId="_bbpZvUR4Fk" />
        </div>


    )

}

export default Cards