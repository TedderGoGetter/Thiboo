import YoutubeEmbed from './YoutubeEmbed'
import ReactYoutube from './ReactYoutube'
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

  //e.target / e.currentTarget .classList

  

    return(

        <div className='cardsContainer'>


            <ReactYoutube embedId="OGV5rJ40r4w" />



            {/* <YoutubeEmbed embedSize={embedSize} className={"embeds vid1"} embedId="w19wmJCgGsc" />
            <YoutubeEmbed embedSize={embedSize} className={"embeds vid2"} embedId="OGV5rJ40r4w" />
            <YoutubeEmbed embedSize={embedSize} className={"embeds vid3"} embedId="_bbpZvUR4Fk" />
            <button onClick={youtubeClick}></button>
            <button ></button>
            <button></button> */}
        </div>


    )

}

export default Cards