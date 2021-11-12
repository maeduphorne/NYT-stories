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

  const [filteredStories, setFilteredStories] = useState()
  const [story, setStory] = useState({})
  const [error, setError]= useState('')

  const addID = (data) => {
    return data.map((story) => ({ ...story, id: uuidv4() }));
  };

  const filterStories = (value) => {
    const searchedStories = stories.filter((story) => 
      story.title.includes(value))
    setFilteredStories(searchedStories)
  };

  useEffect(() => {
    apiCalls.fetchStoriesData()
    .then((data => setStories(addID(data.results))))
    .then(console.log(filteredStories))
    .catch((err) => setError(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        {!filteredStories &&
        <Route path="/" element={
          <StoryCardsArea stories={stories} setStory={setStory} filterStories={filterStories} />
        }/> }
        {filteredStories &&
        <Route path="/" element={
          <StoryCardsArea stories={filteredStories} setStory={setStory} filterStories={filterStories} />
        }/> }
        <Route path={`/article/:${story.id}`} element={<StoryDetails story={story}/>}/>
      </Routes>
    </div>
  );
}

export default App;
