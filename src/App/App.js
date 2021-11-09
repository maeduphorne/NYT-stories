import './App.css';
import apiCalls from '../api/apiCalls';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories]= useState([
    {
      "section": "arts",
      "subsection": "television",
      "title": "JoAnna Cameron, an Early Female Superhero on TV, Is Dead at 73",
      "abstract": "In addition to achieving Saturday morning fame as Isis, she was said to have appeared in more national television commercials than anyone in advertising history.",
      "url": "https://www.nytimes.com/2021/11/05/arts/television/joanna-cameron-dead.html",
      "uri": "nyt://article/28153176-bbef-5287-a3f2-1f4752f9e10e",
      "byline": "By Katharine Q. Seelye",
      "item_type": "Article",
      "updated_date": "2021-11-06T21:09:00-04:00",
      "created_date": "2021-11-05T18:36:20-04:00",
      "published_date": "2021-11-05T18:36:20-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
      "Deaths (Obituaries)",
      "Television",
      "Actors and Actresses",
      "Advertising and Marketing",
      "Isis (TV Program)"
      ],
      "org_facet": [],
      "per_facet": [
      "Cameron, JoAnna (1948-2021)"
      ],
      "geo_facet": [],
      "multimedia": [
      {
      "url": "https://static01.nyt.com/images/2021/11/06/obituaries/06Cameron-obit/00Cameron-superJumbo.jpg",
      "format": "superJumbo",
      "height": 2048,
      "width": 1642,
      "type": "image",
      "subtype": "photo",
      "caption": "JoAnna Cameron in the superpowered title role of the Saturday morning TV series “Isis.” The show made its debut in September 1975, before both “Wonder Woman” and “The Bionic Woman.”",
      "copyright": "CBS, via PhotoFest"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/obituaries/06Cameron-obit/00Cameron-thumbStandard.jpg",
      "format": "Standard Thumbnail",
      "height": 75,
      "width": 75,
      "type": "image",
      "subtype": "photo",
      "caption": "JoAnna Cameron in the superpowered title role of the Saturday morning TV series “Isis.” The show made its debut in September 1975, before both “Wonder Woman” and “The Bionic Woman.”",
      "copyright": "CBS, via PhotoFest"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/obituaries/06Cameron-obit/00Cameron-thumbLarge.jpg",
      "format": "thumbLarge",
      "height": 150,
      "width": 150,
      "type": "image",
      "subtype": "photo",
      "caption": "JoAnna Cameron in the superpowered title role of the Saturday morning TV series “Isis.” The show made its debut in September 1975, before both “Wonder Woman” and “The Bionic Woman.”",
      "copyright": "CBS, via PhotoFest"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/obituaries/06Cameron-obit/00Cameron-mediumThreeByTwo210.jpg",
      "format": "mediumThreeByTwo210",
      "height": 140,
      "width": 210,
      "type": "image",
      "subtype": "photo",
      "caption": "JoAnna Cameron in the superpowered title role of the Saturday morning TV series “Isis.” The show made its debut in September 1975, before both “Wonder Woman” and “The Bionic Woman.”",
      "copyright": "CBS, via PhotoFest"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/obituaries/06Cameron-obit/00Cameron-articleInline.jpg",
      "format": "Normal",
      "height": 237,
      "width": 190,
      "type": "image",
      "subtype": "photo",
      "caption": "JoAnna Cameron in the superpowered title role of the Saturday morning TV series “Isis.” The show made its debut in September 1975, before both “Wonder Woman” and “The Bionic Woman.”",
      "copyright": "CBS, via PhotoFest"
      }
      ],
      "short_url": "https://nyti.ms/3woHhmK"
      },
      {
      "section": "sports",
      "subsection": "football",
      "title": "Aaron Rodgers Lashes Out About N.F.L.’s Vaccine Requirements",
      "abstract": "In an interview given by the quarterback as he isolated because of a positive coronavirus test, he said that he was a victim of a “woke mob” and that he had unsuccessfully petitioned the N.F.L. to accept his alternative to being vaccinated.",
      "url": "https://www.nytimes.com/2021/11/05/sports/football/coronavirus-aaron-rodgers.html",
      "uri": "nyt://article/0ef3ff7d-e6d1-521b-bf0c-f90830d731f5",
      "byline": "By Emmanuel Morgan",
      "item_type": "Article",
      "updated_date": "2021-11-06T12:04:46-04:00",
      "created_date": "2021-11-05T17:06:55-04:00",
      "published_date": "2021-11-05T17:06:55-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
      "Football",
      "Vaccination and Immunization",
      "Coronavirus (2019-nCoV)"
      ],
      "org_facet": [
      "Green Bay Packers",
      "National Football League"
      ],
      "per_facet": [
      "Rodgers, Aaron"
      ],
      "geo_facet": [],
      "multimedia": [
      {
      "url": "https://static01.nyt.com/images/2021/11/06/sports/05nfl-rodgers-print/merlin_197272584_506d7670-b400-4ca2-bd34-9ad9e209eb57-superJumbo.jpg",
      "format": "superJumbo",
      "height": 1365,
      "width": 2048,
      "type": "image",
      "subtype": "photo",
      "caption": "Green Bay Packers quarterback Aaron Rodgers, who tested positive for the coronavirus and is not vaccinated, criticized the N.F.L.’s virus protocols and said that some of the rules are “based purely in trying to out and shame people.”",
      "copyright": "Rick Scuteri/Associated Press"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/sports/05nfl-rodgers-print/05nfl-rodgers01-thumbStandard.jpg",
      "format": "Standard Thumbnail",
      "height": 75,
      "width": 75,
      "type": "image",
      "subtype": "photo",
      "caption": "Green Bay Packers quarterback Aaron Rodgers, who tested positive for the coronavirus and is not vaccinated, criticized the N.F.L.’s virus protocols and said that some of the rules are “based purely in trying to out and shame people.”",
      "copyright": "Rick Scuteri/Associated Press"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/sports/05nfl-rodgers-print/05nfl-rodgers01-thumbLarge.jpg",
      "format": "thumbLarge",
      "height": 150,
      "width": 150,
      "type": "image",
      "subtype": "photo",
      "caption": "Green Bay Packers quarterback Aaron Rodgers, who tested positive for the coronavirus and is not vaccinated, criticized the N.F.L.’s virus protocols and said that some of the rules are “based purely in trying to out and shame people.”",
      "copyright": "Rick Scuteri/Associated Press"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/sports/05nfl-rodgers-print/merlin_197272584_506d7670-b400-4ca2-bd34-9ad9e209eb57-mediumThreeByTwo210.jpg",
      "format": "mediumThreeByTwo210",
      "height": 140,
      "width": 210,
      "type": "image",
      "subtype": "photo",
      "caption": "Green Bay Packers quarterback Aaron Rodgers, who tested positive for the coronavirus and is not vaccinated, criticized the N.F.L.’s virus protocols and said that some of the rules are “based purely in trying to out and shame people.”",
      "copyright": "Rick Scuteri/Associated Press"
      },
      {
      "url": "https://static01.nyt.com/images/2021/11/06/sports/05nfl-rodgers-print/merlin_197272584_506d7670-b400-4ca2-bd34-9ad9e209eb57-articleInline.jpg",
      "format": "Normal",
      "height": 127,
      "width": 190,
      "type": "image",
      "subtype": "photo",
      "caption": "Green Bay Packers quarterback Aaron Rodgers, who tested positive for the coronavirus and is not vaccinated, criticized the N.F.L.’s virus protocols and said that some of the rules are “based purely in trying to out and shame people.”",
      "copyright": "Rick Scuteri/Associated Press"
      }
      ],
      "short_url": "https://nyti.ms/3k5OJy7"
      }
  ])
  const [error, setError]= useState('')

  // useEffect(() => {
  //   setError('')
  //   apiCalls.fetchStoriesData()
  //   .then((data => setStories(data.results)))
  //   .catch((err) => console.log(err))
  // })

  return (
    <div className="App">
      <Header/>
      <StoryCardsArea stories={stories}/>
    </div>
  );
}

export default App;
