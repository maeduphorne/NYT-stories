import './StoryCardsArea.css'
import StoryTitleCard from '../StoryTitleCard/StoryTitleCard';
import apiCalls from '../api/apiCalls';
import { useEffect, useState } from 'react';
const { uuid } = require('uuidv4');

const StoryCardsArea = () => {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  useEffect(() => {
    setError('')
    apiCalls.fetchStoriesData()
    .then((data => setStories(data.results)))
    .catch((err) => setError(err))
  }, [])

  const storyCards = stories.map((story => {
    const storyImage = story.multimedia.find(image => image.format === "mediumThreeByTwo210")
    return(
      <StoryTitleCard
        key={uuid()}
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