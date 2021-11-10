import './StoryTitleCard.css'
import { Link } from 'react-router-dom';

const StoryTitleCard = ({ story, image }) => {
  return(
    <Link to={'/'} className="story-title-card">
      <img
        className="story-image"
        src={image.url}
        alt={image.caption}
      />
      <h3>{story.title}</h3>
    </Link>
  )
}

export default StoryTitleCard;