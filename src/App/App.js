import './App.css';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import StoryDetails from '../StoryDetails/StoryDetails';
import apiCalls from '../api/apiCalls';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [stories, setStories] = useState([])
  const [story, setStory] = useState({})
  const [error, setError]= useState('')

  const addID = (data) => {
    return data.map((story) => ({ ...story, id: uuidv4() }));
  };

  useEffect(() => {
    apiCalls.fetchStoriesData()
    .then((data => setStories(addID(data.results))))
    .catch((err) => setError(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StoryCardsArea stories={stories} setStory={setStory}/>} />
        <Route path={`/article/:${story.id}`} element={<StoryDetails story={story}/>}/>
        {/* <Route path={} element={<p>Whoops! Nothing to see here.</p>}/> */}
      </Routes>
    </div>
  );
}

export default App;
