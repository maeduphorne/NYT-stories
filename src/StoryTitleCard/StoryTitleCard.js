import './StoryTitleCard.css'
import { Link } from 'react-router-dom';
import StoryDetails from '../StoryDetails/StoryDetails';

const StoryTitleCard = ({ story, image, setStory }) => {
  return(
    <Link 
    to={`/article/:${story.id}`} 
    element ={<StoryDetails story={story} />} 
    className="story-title-card" 
    onClick={() => setStory(story)}>
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