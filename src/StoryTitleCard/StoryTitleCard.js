const StoryTitleCard = ({ story, storyImage }) => {
  // story Image should map through multimedia within the found story and find the thumbnail sized image
  return(
    <article class="storyTitleCard">
      <img
        className="story-image"
        src={storyImage.url}
        alt={storyImage.caption}
      />
      <h3>{story.title}</h3>
    </article>
  )
}

export default StoryTitleCard;