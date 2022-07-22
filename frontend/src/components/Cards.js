import ReactYoutube from './ReactYoutube'
import './CardsNYT.scss'



function Cards() {

  //e.target / e.currentTarget .classList

  return(

    <div className='cardsContainer'>

      <ReactYoutube className="vid1" embedId="w19wmJCgGsc"/>

      <ReactYoutube className="vid2" embedId="OGV5rJ40r4w"/>

      <ReactYoutube className="vid3" embedId="_bbpZvUR4Fk"/>

    </div>


  )

}

export default Cards