import './StoryCardsArea.css'
import StoryTitleCard from '../StoryTitleCard/StoryTitleCard';
const { v4: uuid } = require('uuid');

const StoryCardsArea = ({ stories }) => {

  const storyCards = stories.map((story => {
    const storyImage = story.multimedia.find(image => image.format === "superJumbo")
    return(
      <StoryTitleCard
        key={uuid()}
        story={story}
        image={storyImage}
      />
    )
  }))
  return (
    <div className="stories-area">
      {storyCards}
    </div>
  )
}

export default StoryCardsArea;