import './StoryDetails.css'

const StoryDetails = () => {
  // pass through a prop of the selected story
  const story = {
    "section": "automobiles",
    "subsection": "",
    "title": "Rivian prices its I.P.O., valuing the electric-vehicle maker at nearly $70 billion.",
    "abstract": "The company, backed by Amazon and Ford, has delivered only 156 trucks so far, but its market worth approaches that of Ford.",
    "url": "https://www.nytimes.com/2021/11/09/automobiles/rivian-ipo.html",
    "uri": "nyt://article/ad4376c4-f030-5885-ae58-ac1e3d134838",
    "byline": "By Peter Eavis and Neal E. Boudette",
    "item_type": "Article",
    "updated_date": "2021-11-10T05:00:45-05:00",
    "created_date": "2021-11-09T23:31:00-05:00",
    "published_date": "2021-11-09T23:31:00-05:00",
    "material_type_facet": "",
    "kicker": "",
    "des_facet": [
    "Automobiles",
    "Electric and Hybrid Vehicles",
    "Initial Public Offerings",
    "Stocks and Bonds"
    ],
    "org_facet": [
    "Rivian Automotive LLC"
    ],
    "per_facet": [
    "Scaringe, R J"
    ],
    "geo_facet": [],
    "multimedia": [
    {
    "url": "https://static01.nyt.com/images/2021/11/09/business/09economy-briefing-rivian-1/merlin_194791743_308a36fe-31a0-4896-ae81-78e8d7ec2918-superJumbo.jpg",
    "format": "superJumbo",
    "height": 1536,
    "width": 2048,
    "type": "image",
    "subtype": "photo",
    "caption": "Rivian and many other automakers are betting that consumers are prepared to rapidly shift to electric vehicles over the next decade.",
    "copyright": "Nathan Frandino/Reuters"
    }
    ],
    "short_url": "https://nyti.ms/3kngmTi"
    }

  const storyImage = story.multimedia.find(image => image.format === "superJumbo")

  return(
    <article className="story-details">
      <img
        className="story-image"
        src={storyImage.url}
        alt={storyImage.caption}
      />
      <h3>{story.title}</h3>
      <h4>{story.byline}</h4>
      <p>{story.abstract}</p>
      {/* Set up link with path of this url */}
      <p>{story.short_url}</p>
    </article>
  )
}

export default StoryDetails;