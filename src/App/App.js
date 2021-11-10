import './App.css';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import StoryDetails from '../StoryDetails/StoryDetails';
import apiCalls from '../api/apiCalls';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  useEffect(() => {
    setError('')
    apiCalls.fetchStoriesData()
    .then((data => setStories(data.results)))
    .catch((err) => setError(err))
  }, [])

  return (
    <div className="App">
      <Header/>
      <StoryCardsArea stories={stories}/>
      <StoryDetails />
    </div>
  );
}

export default App;
