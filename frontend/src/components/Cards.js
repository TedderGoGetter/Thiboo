import YoutubeEmbed from './YoutubeEmbed'
import './CardsNYT.scss'
import {useState} from 'react'




function Cards() {

  //Embed related

  // orginal video values are w640 and h385
  const [isClicked, setIsClicked] = useState(false)
  const [embedSize, setEmbedSize] = useState([256,154])
  
  const youtubeClick = (e) => {
    e.preventDefault()
    if (isClicked) {
      setIsClicked(false)
      setEmbedSize([256,154])
    }
    if (!isClicked) {
      setIsClicked(true)
      setEmbedSize([640,385])
    }

    console.log('youtubeClick was activated')
    console.log(embedSize[0])
    console.log(embedSize[1])
  }


    return(

        <div className='cardsContainer'>
            <YoutubeEmbed embedSize={embedSize} className={"embeds vid1"} embedId="w19wmJCgGsc" />
            <YoutubeEmbed embedSize={embedSize} className={"embeds vid2"} embedId="OGV5rJ40r4w" />
            <YoutubeEmbed embedSize={embedSize} className={"embeds vid3"} embedId="_bbpZvUR4Fk" />
            <button onClick={youtubeClick}></button>
        </div>


    )

}

export default Cards