import './StoryDetails.css'
import Header from '../Header/Header'

const StoryDetails = ({ story }) => {

  const storyImage = story.multimedia.find(image => image.format === "superJumbo")

  return(
    <div>
      <Header/>
      <article className="story-details">
        
        <img
          className="story-image"
          src={storyImage.url}
          alt={storyImage.caption}
        />
        <div className="story-info">
          <h3>{story.title}</h3>
          <h4>{story.byline}</h4>
          <p>{story.abstract}</p>
          {/* Set up link with path of this url */}
          <p>{story.short_url}</p>
        </div>
      </article>
    </div>
  )
}

export default StoryDetails;