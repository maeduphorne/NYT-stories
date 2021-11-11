import './StoryCardsArea.css'
import StoryTitleCard from '../StoryTitleCard/StoryTitleCard';
import Header from '../Header/Header';

const StoryCardsArea = ({ stories, setStory }) => {

  const storyCards = stories.map((story => {
    const storyImage = story.multimedia.find(image => image.format === "superJumbo")
    return(
      <StoryTitleCard
        key={story.id}
        story={story}
        image={storyImage}
        setStory={setStory}
      />
    )
  }))
  return (
    <div className="stories-area">
      <Header/>
      {storyCards}
    </div>
  )
}

export default StoryCardsArea;