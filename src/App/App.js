import './App.css';
import apiCalls from '../api/apiCalls';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  useEffect(() => {
    setError('')
    apiCalls.fetchStoriesData()
    .then((data => setStories(data.results)))
    .catch((err) => console.log(err))
  })

  return (
    <div className="App">
      <Header/>
      <StoryCardsArea stories={stories}/>
    </div>
  );
}

export default App;
