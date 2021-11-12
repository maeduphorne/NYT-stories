import './StoryCardsArea.css'
import StoryTitleCard from '../StoryTitleCard/StoryTitleCard';
import Header from '../Header/Header';
import Search from '../Search/Search';

const StoryCardsArea = ({ stories, setStory, filterStories }) => {

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
    <div className="homepage">
      <Header/>
      <Search filterStories={filterStories} />
      <div className="stories-area">
        {storyCards}
      </div>
    </div>
  )
}

export default StoryCardsArea;