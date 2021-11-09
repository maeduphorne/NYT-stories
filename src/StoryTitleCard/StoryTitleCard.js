import './StoryTitleCard.css'

const StoryTitleCard = ({ story, image }) => {
  return(
    <article className="storyTitleCard">
      <img
        className="story-image"
        src={image.url}
        alt={image.caption}
      />
      <h3>{story.title}</h3>
    </article>
  )
}

export default StoryTitleCard;