import './App.css';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import StoryDetails from '../StoryDetails/StoryDetails';
import apiCalls from '../api/apiCalls';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  const addID = (data) => {
    return data.map((story) => ({ ...story, id: uuidv4() }));
  };

  useEffect(() => {
    apiCalls.fetchStoriesData()
    .then((data => setStories(addID(data.results))))
    .catch((err) => setError(err))
  }, [])

// how to select a single story?
// on click, find the story that is the target of the click (by ID?)

  return (
    <div className="App">
      <Header/>
      <StoryCardsArea stories={stories}/>
      <StoryDetails />
    </div>
  );
}

export default App;
