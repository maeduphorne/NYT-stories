import './StoryDetails.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const StoryDetails = ({ story }) => {

  const storyImage = story.multimedia.find(image => image.format === "superJumbo")

  return(
    <div>
      <Header/>
      <article className="story-details">
        <img
          className="detail-story-image"
          src={storyImage.url}
          alt={storyImage.caption}
        />
        <div className="story-info">
          <h3>{story.title}</h3>
          <h4>{story.byline}</h4>
          <p>{story.abstract}</p>
          <a href={`${story.short_url}`} className="nyt-link">View Full Story Here</a>
          <Link to={'/'}>
            <button className="home-btn">TAKE ME HOME</button>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default StoryDetails;