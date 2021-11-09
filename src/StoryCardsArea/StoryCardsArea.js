import './StoryCardsArea.css'
import StoryTitleCard from '../StoryTitleCard/StoryTitleCard';
import { uniqueId } from 'lodash';

const StoryCardsArea = ({ stories }) => {
  const storyCards = stories.map((story => {
    // story Image should map through multimedia within the found story and find the thumbnail sized image
    const storyImage = story.multimedia.find(image => image.format === "mediumThreeByTwo210")
    
    return(
      <StoryTitleCard
        story={story}
        image={storyImage}
      />
    )
  }))
  return (
    <div className="stories-area">{storyCards}</div>
  )
}

export default StoryCardsArea;