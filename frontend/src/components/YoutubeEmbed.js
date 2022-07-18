import PropTypes from "prop-types"
import './CardsNYT.scss'




const YoutubeEmbed = ({ embedId, embedSize }) => (
  
  <div className="video-responsive">
    <iframe
      width={embedSize[0]}
      height={embedSize[1]}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed